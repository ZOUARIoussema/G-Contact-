import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {


  mode: number = 1;
  contact: any;
  idContact: number;

  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactService,
    public router:Router) {

    this.idContact = this.activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {


    this.contactService.getContactById(this.idContact).subscribe
      (

        data => {

          this.contact = data;
        },err=>{
          console.log(err);
        }
        

      )

  }


  updateContact() {


    console.log(this.contact);

    this.contactService.updateContact(this.contact).subscribe
    (
      data=>{

        console.log(data);
        alert ("Mise a jour effectuer");
        this.router.navigate(['contacts']);

        
      },err=>{
        console.log(err)
        alert("Probleme");
        
      }
    );

  }

}
