import { Component,ChangeDetectorRef, SimpleChanges  } from '@angular/core';
import { ReadCsvService } from './services/read-csv.service';
import {FillTablesService} from './services/fill-tables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_new';
  changeLog: any;

  constructor(private fillTable: FillTablesService,private csvFile : ReadCsvService,private changeDetection: ChangeDetectorRef){}
  users = this.fillTable.Users;
  
  changeListener(file:any){
   // console.log("hi");
   // this.csvFile.ReadCsv(file);
   
   // this.fillTable.showUsers();
  }

  validpass(){
    this.fillTable.getvalidpass();
    this.fillTable.showUsers();
    this.changeDetection.detectChanges();
 //   var table = document.getElementById ("myTable");
 //   table.reload();
  }

  validfail(){
    this.fillTable.getvalidfail(); 
    this.fillTable.showUsers();
    this.changeDetection.detectChanges();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
