import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../ehi-contact-list/contact.service';


@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.css']
})
export class ConfirmationModelComponent implements OnInit {

  title = 'Delete Record';

  constructor( public dialogRef: MatDialogRef<ConfirmationModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ContactService) { }

  ngOnInit() {
    console.log('data: ', this.data);
  }

  delete(){
    this.contactService.deleteContact(this.data).subscribe(data => {
      console.log(data);
      this.dialogRef.close(this.data);
    });
  }

  cancel(){
    this.dialogRef.close();
  }
}
