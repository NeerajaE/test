import { DOCUMENT } from '@angular/common';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateserviceService } from '../dateservice.service';
import { TesService } from '../tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form:FormGroup;

  name:string = "prudhvi";

  passport ="";

  surname="";

  checkstatus=true;

  document:any;
  constructor(@Inject(DOCUMENT) document:Document,private dateservice:DateserviceService
  ,private a:TesService,private formBuilder:FormBuilder) { 
    this.document = document;


    this.a.print();

    this.form = this.formBuilder.group({
      first:['',Validators.required],
      last:['',Validators.required]
    });
  }

  ngOnInit(): void { 
    this.dateservice.printsomedummymessage();
  }

  print(event:any){
    
    alert(this.document.getElementById('secondname').value);
  }


 onsubmit(data:any){
    if(data.email==""){
      alert('Enter you email id');
    }else{
      alert(data.email);
    }
    if(data.password==""){
      alert('Reqired password');
    }else{
      alert(data.password);
    }
  }

  submit(){
    if(this.form.valid){
      console.log(this.form);
      alert(this.form.value.first);
      alert(this.form.value.last);
    }
  }

}
