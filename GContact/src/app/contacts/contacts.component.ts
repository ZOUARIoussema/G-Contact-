import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/model/contact';
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




  constructor(public http:HttpClient,public contactS:ContactService,public router:Router) { }

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


  onEditContact(id:number){

    this.router.navigate(['edit-contact',id])


  }

  onDelete(c:Contact){



    let confirm=window.confirm('Est vous sure ?');

    if(confirm==true){


      this.contactS.deleteContact(c.id).subscribe
      (
  
        data=>{
  
          
          this.pagecontact.content.splice(
            this.pagecontact.content.indexOf(c),1
          );
  
        },err=>{
  
          alert("erreur de suppression !")
          console.log(err);
  
        }
  
      )
  

      
    }

   

    


  }

}
