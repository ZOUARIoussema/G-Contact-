import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/service/contact.service';

 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {name:"med",email:"oussema.zouari@esprit.tn"};
  pagecontact:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:any;




  constructor(private http:HttpClient,private contactS:ContactService) { }

  ngOnInit() {

    this.doSearch();

  }

  doSearch(){



    this.contactS.getContact(this.motCle,this.currentPage,this.size).subscribe(

      data=>{
        this.pagecontact=data;
        this.pages=new Array(this.pagecontact.totalPages)
      },
      err=>{console.log(err)}
      
      

     );


  }

  chercher(){

    this.doSearch();

  }

  goToPage(i:number){

    this.currentPage=i;
    this.doSearch();

  }

}
