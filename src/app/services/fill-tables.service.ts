import { Injectable } from '@angular/core';
import UsersJson from './data.json';
import { ReadCsvService } from './read-csv.service';

interface USERS {
  id: String;
  payeename: String;
  payername: String;
  payeeacc: String;
  payeracc: String;
  date: String;
  amt: String;
}


@Injectable({
  providedIn: 'root'
})


export class FillTablesService {
  constructor(private readcsv:ReadCsvService) {
    // console.log(this.Users);
  }
  
 // Users: USERS[] = [];

  public showUsers() {

    // let columnFromBackend = getData();
    // console.log(columnFromBackend);  // line 34
  }

  public async getall(){
    let response = await fetch("http://localhost:3000/api/all");
    //console.log(typeof response.json());
    

  return response.json();


  }

  public async getvalidpass() {
    let response = await fetch("http://localhost:3000/api/validate-pass/");

    return response.json();


  }

  public async getvalidfail() {
    let response = await fetch("http://localhost:3000/api/validate-fail/");

    return response.json();


  }

  public async getscreenpass() {
    let response = await fetch("http://localhost:3000/api/screen-pass/");

    return response.json();


  }

  public async getscreenfail() {
    let response = await fetch("http://localhost:3000/api/screen-fail/");

    return response.json();


  }

}
