import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ContactService } from './contact.service';
import { IContact } from '../shared/model/data-model';
import {MatDialog} from '@angular/material/dialog';
import {UpdateContactComponent} from '../update-contact/update-contact.component'
import { ConfirmationModelComponent } from '../confirmation-model/confirmation-model.component';

@Component({
  selector: 'app-ehi-contact-list',
  templateUrl: './ehi-contact-list.component.html',
  styleUrls: ['./ehi-contact-list.component.css']
})
export class EhiContactListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'status', 'modify', 'statusModify'];
  dataSource = new MatTableDataSource<IContact>();

  dataTable: IContact[];

  constructor(
    private contactService: ContactService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit() {
    this.contactService.getContactList().subscribe((data: IContact[]) => {
      this.dataTable = data;
      this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
    });
  }

  addContact(type: string, data?: IContact) {
    const dialogRef = this.matDialog.open(UpdateContactComponent, {
      width: '500px',
      data: {data, type},
    });

    dialogRef.afterClosed().subscribe((result: IContact) => {
      if (result) {
        if(type === 'add'){
          this.dataTable.push(result);
        } else {
          const idx = this.dataTable.map(e => e.id).indexOf(result.id);
          this.dataTable.splice(idx, 1);
          this.dataTable.splice(idx, 0, result);
        }
        this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
      }
    });
  }

  deleteContact(id: number){
    const dialogRef = this.matDialog.open(ConfirmationModelComponent, {
      width: '350px',
      data: id,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const idx = this.dataTable.map(e => e.id).indexOf(id);
        this.dataTable.splice(idx, 1);
        this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
      }
    });
  }
}