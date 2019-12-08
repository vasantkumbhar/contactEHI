import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../ehi-contact-list/contact.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.css']
})
export class ConfirmationModelComponent implements OnInit {

  title = 'Delete Record';

  constructor( public dialogRef: MatDialogRef<ConfirmationModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ContactService,
    private toastr: ToastrService) { }

  ngOnInit() {}

  delete() {
    this.contactService.deleteContact(this.data).subscribe(data => {
      this.toastr.success('Record deleted successfully!');
      this.dialogRef.close(this.data);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}