import { Injectable } from '@angular/core';
import UsersJson from './data.json';
  
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
  Users: USERS[] = UsersJson;
  constructor(){
  // console.log(this.Users);
  }

  public showUsers(){
    
 // let columnFromBackend = getData();
 // console.log(columnFromBackend);  // line 34
  }

  public getvalidpass(){
    const getData = async () => {
      let response = await fetch("http://localhost:3000/validpass");
    
      let data = await response.json();
      
      this.Users = data;
      console.log(this.Users);  // line 29
    
    };
  
    getData();
  }

  public getvalidfail(){
    const getData = async () => {
      let response = await fetch("http://localhost:3000/validfail");
    
      let data = await response.json();
      
      this.Users = data;
      console.log(this.Users);  // line 29
      
    };
  
    getData();
  }

  

}
