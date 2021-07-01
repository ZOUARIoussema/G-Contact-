import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/contact';

import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


  contact: Contact = new Contact();
  mode:number=1;
  constructor(public service: ContactService) { }

  ngOnInit() {
  }


  saveContact() {

    console.log(this.contact);
    this.service.saveContact(this.contact).subscribe(
      data => { console.log(data) ;
      this.mode=2;},
      err => {
        console.log(err)
      }
    );

    }

}
