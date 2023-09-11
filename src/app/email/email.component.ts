import { Component } from '@angular/core';
import { EmailService } from '../Service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent {

data= {
  to:"",
  subject:"",
  message:"",

}

flag:boolean=false;
  snak: any;

  constructor(private email:EmailService){}

  ngOnInit(): void {

  }
  dosubmitform()
  {
    console.log("try to submit form");
    console.log("Data", this.data);
    if(this.data.to=='' || this.data.subject==''|| this.data.message=='')
    {
      this.snak.open("field can not be empty !!","ok");
      return;
    }

    // this.flag=true;
    // this.email.sendemail(this.data).subscribe(
    //   (response: any)=>{
    //   console.log(response);
    //   this.flag=false; 
    //   this.snak.open("send success","ok")
    //   },
    //   (      error: any)=>{
    //   console.log(Error);
    //   this.flag=false;
    //   this.snak.open("ERROR!! ","ok")
    
    //   }
    // )
  
  }
}
