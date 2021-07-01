import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public cotactService:ContactService) { }

  ngOnInit() {
  }


  onsaveContact(dataForm){

    console.log(dataForm);

    this.cotactService.saveContact(dataForm).subscribe(
      data => { console.log(data) ;
      },
      err => {
        console.log(err)
      }
    );

  }
  

}
