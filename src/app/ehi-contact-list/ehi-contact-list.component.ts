import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ContactService } from './contact.service';
import { IContact, Contact } from '../shared/model/data-model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
    private changeDetectorRefs: ChangeDetectorRef

  ){

  }

  ngOnInit() {
    this.contactService.getContactList().subscribe((data: Contact[]) => {
      this.dataTable = data.slice();
      this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
    });
  }

  addContact(data, type){
    console.log(data);
    const dialogRef = this.matDialog.open(UpdateContactComponent, {
      
      width: '500px',
      data: {data, type},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);

      if (result) {
        if(type === 'add'){
          this.dataTable.push(result);
        }
        else{
          const idx = this.dataTable.map(e => e.id).indexOf(result.id);
          this.dataTable.splice(idx, 1);
          this.dataTable.splice(idx, 0, result);
        }
        this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
      }
    });
  }

  deleteContact(id: number){
    console.log(id);

    const dialogRef = this.matDialog.open(ConfirmationModelComponent, {
      width: '300px',
      data: id,
    });

    // this.contactService.deleteContact(id).subscribe(data => {
    //   console.log(data);
    //   this.changeDetectorRefs.detectChanges();
    // });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      console.log(this.dataTable.map(e => e.id).indexOf(result));
      if (result) {
        this.dataTable.splice(this.dataTable.map(e => e.id).indexOf(result.id), 1);
        this.dataSource = new MatTableDataSource<IContact>(this.dataTable);
      }
    });
  }
}