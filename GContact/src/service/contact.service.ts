import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http :HttpClient) {


   }

   getContact(motCle:string,page:number,size:number){

    return this.http.get("http://localhost:8081/chercherContacts?mc="+motCle+"&page="+page+"&size="+size);
   }
}
