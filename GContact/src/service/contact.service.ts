import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/model/contact';
 

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http :HttpClient) {


   }

   getContact(motCle:string,page:number,size:number){

    return this.http.get("http://localhost:8081/chercherContacts?mc="+motCle+"&page="+page+"&size="+size);
   }


   
   getContactById(id:number){

    return this.http.get("http://localhost:8081/contacts/"+id);
   }

   saveContact(contact:Contact){

    return this.http.post("http://localhost:8081/contacts",contact);

   }

   updateContact(contact:Contact){

    return this.http.put("http://localhost:8081/contacts",contact);

   }

  deleteContact(id:number){

    return this.http.delete("http://localhost:8081/contacts/"+id);

   }
}
