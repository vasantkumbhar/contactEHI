import { Injectable } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { IContact } from '../shared/model/data-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // API URL
  private APIURL = 'http://localhost:3000/contact/'
  constructor(
    private dataService: DataService
  ) { }

  // getContactList() to get all contact list
  getContactList() {
    return this.dataService.get(this.APIURL);
  }

  // addContact() to add new contact
  addContact(data: IContact){
    return this.dataService.post(this.APIURL, data);
  }

  // updateContact() to update existing contact
  updateContact(id: number, data: IContact){
    return this.dataService.patch(this.APIURL + id, data);
  }

  // deleteContact() to delete existing contact
  deleteContact(id: number) {
    return this.dataService.delete(this.APIURL + id);
  }
}
