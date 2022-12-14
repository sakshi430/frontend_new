import { Component, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ReadCsvService } from './services/read-csv.service';
import { FillTablesService } from './services/fill-tables.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_new';
  changeLog: any;
  image_src:string = "assets/images/citi-logo.png";
  users:any;

  constructor(private titleService: Title ,private fillTable: FillTablesService, private csvFile: ReadCsvService, private changeDetection: ChangeDetectorRef) {
  
    //this.users= this.fillTable.getall();
   // this.fetchInitialData();
    this.users=this.csvFile.data;
    this.setTitle();
   }

   public setTitle( ) {
    this.titleService.setTitle( "Sanction Screening" );
  }

    async fetchInitialData(){
    const data= await this.fillTable.getall();
    //console.log(data);
    this.users=data;
   }

//  users = this.fillTable.Users;
 // users = this.fillTable.getall();

  async changeListener(file: any) {
    // console.log("hi");
     await this.csvFile.ReadCsv(file);
     this.users=this.csvFile.data;
    // await this.fetchInitialData();
   // this.fillTable.getall();
    // this.fillTable.showUsers();
  }

  async validpass() {
    const data = await this.fillTable.getvalidpass();
    //console.log(data);
    this.users = data;
    // this.fillTable.showUsers();
    // this.changeDetection.detectChanges();
    //   var table = document.getElementById ("myTable");
    //   table.reload();
  }

  async validfail() {
    const data = await this.fillTable.getvalidfail();

    this.users = data;

    //this.fillTable.showUsers();
    this.changeDetection.detectChanges();
  }

  async screenpass() {
    const data = await this.fillTable.getscreenpass();
    //console.log(data);
    this.users = data;
    // this.fillTable.showUsers();
    // this.changeDetection.detectChanges();
    //   var table = document.getElementById ("myTable");
    //   table.reload();
  }

  async screenfail() {
    const data = await this.fillTable.getscreenfail();
    //console.log(data);
    this.users = data;
    // this.fillTable.showUsers();
    // this.changeDetection.detectChanges();
    //   var table = document.getElementById ("myTable");
    //   table.reload();
  }

  async alldata() {
    const data = await this.fillTable.getall();
    //console.log(data);
    this.users = data;
    // this.fillTable.showUsers();
    // this.changeDetection.detectChanges();
    //   var table = document.getElementById ("myTable");
    //   table.reload();
  }


  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
     // console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
