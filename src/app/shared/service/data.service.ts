import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../model/data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, data: IContact) {
    return this.httpClient.post(url, data);
  }

  patch(url: string, data: IContact) {
    return this.httpClient.patch(url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
