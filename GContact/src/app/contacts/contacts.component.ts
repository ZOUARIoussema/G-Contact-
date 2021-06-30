import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/service/contact.service';
import { runInThisContext } from 'vm';
 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {name:"med",email:"oussema.zouari@esprit.tn"};
  pagecontact:any;
  motCle:string="";
  page:number=0;
  size:number=5;
  pages:Array<number>


  constructor(private http:HttpClient,private contactS:ContactService) { }

  ngOnInit() {

    

  }

  doSearch(){



    this.contactS.getContact(this.motCle,this.page,this.size).subscribe(

      data=>{this.pagecontact=data},
      err=>{console.log(err)}
      
      

     );


  }

  chercher(){

    this.doSearch();

  }

}
