import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor() { }

  gettodaysdate(){
    let date = new Date();
    return date;
  }

  printsomedummymessage(){
    alert("welcome to my webpage");
  }
}