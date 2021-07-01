import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


  contact={
    nom:'',
    prenom:'',
    email:'',
    dateNaissance:null,
    tel:null
  }

  constructor() { }

  ngOnInit() {
  }

}
