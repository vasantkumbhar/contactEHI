import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../ehi-contact-list/contact.service';
import { IStatus } from '../shared/model/data-model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  
  title: string;
  selectedStatus: string = 'Active';
  statusList: IStatus[] = [{
    name: 'Active',
    value: 'Active'
  },
  {
    name: 'Inactive',
    value: 'Inactive'
  }];
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    status: new FormControl(''),
  });

  constructor( public dialogRef: MatDialogRef<UpdateContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ContactService) { }

  ngOnInit() {
    console.log('data: ', this.data);

    if (this.data.type === 'add') {
      this.title = 'Add Contact';
      this.selectedStatus = '';
    } else {
      this.title = 'Update Contact';
      this.selectedStatus = this.data.data.status;
      console.log('this.selectedStatus: ', this.selectedStatus);
    }

    if(this.data.type === 'update'){
      this.contactForm.controls.firstName.setValue(this.data.data.firstName);
      this.contactForm.controls.lastName.setValue(this.data.data.lastName);
      this.contactForm.controls.email.setValue(this.data.data.email);
      this.contactForm.controls.phoneNumber.setValue(this.data.data.phoneNumber);
      this.contactForm.controls.status.setValue(this.data.data.status);
    }
  }

  onSubmit(){
    console.log(this.contactForm.value);

    if(this.data.type === 'add'){
      this.contactService.addContact(this.contactForm.value).subscribe(data => {
        console.log(data);

        this.dialogRef.close(data);
      });
    }
    if(this.data.type === 'update'){
      this.contactForm.patchValue({
        firstName: this.contactForm.controls.firstName.value,
        lastName: this.contactForm.controls.lastName.value,
        email: this.contactForm.controls.email.value,
        phoneNumber: this.contactForm.controls.phoneNumber.value,
        status: this.contactForm.controls.status.value
      });

      console.log(this.contactForm.value);

      this.contactService.updateContact(this.data.data.id, this.contactForm.value).subscribe(data => {
        console.log(data);
        this.dialogRef.close(data);
      });
    }
  }

  cancel(){
    this.dialogRef.close();
  }

}
