import { Injectable } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { IContact } from '../shared/model/data-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private APIURL = 'http://localhost:3000/contact/'
  constructor(
    private dataService: DataService
  ) { }


  getContactList(){
    return this.dataService.get(this.APIURL);
  }

  addContact(data: IContact){
    return this.dataService.post(this.APIURL, data);
  }

  updateContact(id: number, data: IContact){
    return this.dataService.patch(this.APIURL + id, data);
  }

  deleteContact(id: number) {
    return this.dataService.delete(this.APIURL + id);
  }
}
