import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../ehi-contact-list/contact.service';
import { IStatus } from '../shared/model/data-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  title: string;
  selectedStatus = 'Active';
  statusList: IStatus[] = [{
    name: 'Active',
    value: 'Active'
  },
  {
    name: 'Inactive',
    value: 'Inactive'
  }];

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    status: new FormControl('', Validators.required),
  });

  constructor( public dialogRef: MatDialogRef<UpdateContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ContactService,
    private toastr: ToastrService) { }

  ngOnInit() {
    if (this.data.type === 'add') {
      this.title = 'Add Contact';
      this.selectedStatus = '';
    } else {
      this.title = 'Update Contact';
      this.selectedStatus = this.data.data.status;
    }

    if (this.data.type === 'update') {
      this.contactForm.controls.firstName.setValue(this.data.data.firstName);
      this.contactForm.controls.lastName.setValue(this.data.data.lastName);
      this.contactForm.controls.email.setValue(this.data.data.email);
      this.contactForm.controls.phoneNumber.setValue(this.data.data.phoneNumber);
      this.contactForm.controls.status.setValue(this.data.data.status);
    }
  }

  onSubmit() {
    if (this.data.type === 'add') {
      this.contactService.addContact(this.contactForm.value).subscribe(data => {
        this.toastr.success('Record added successfully!');
        this.dialogRef.close(data);
      });
    } else if (this.data.type === 'update') {
      this.contactService.updateContact(this.data.data.id, this.contactForm.value).subscribe(data => {
        this.toastr.success('Record updated successfully!');
        this.dialogRef.close(data);
      });
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
