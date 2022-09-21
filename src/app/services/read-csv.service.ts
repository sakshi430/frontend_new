import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ReadCsvService {
  data: any[] = [];

  url='http://localhost:3000/api/store'

  saveData(data:any)
  {
   // console.log(data);
   let strdata=JSON.stringify(data);
    let finaldata=JSON.parse(strdata);
    return this.http.post(this.url,finaldata);

  }

  constructor(private http:HttpClient) { }

  
  public ReadCsv(event: Event){
    console.log("hello")
    console.log(event);
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    if(file) {
      console.log("pi");
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         
         reader.readAsText(file);
         reader.onload = (e) => {
            var csv: string = reader.result as string;
           // console.log(csv);
            this.data=  this.importDataFromCSV(csv);
            //console.log(this.data);
            this.saveData(this.data).subscribe((result)=>{
              console.warn(result)
            })
            
         }

         //console.log(this.data);
      }
  }
  

  public importDataFromCSV(csvText : string): Array<any>{
    const propertyNames=["id","date", "payeename", "payeeacc", "payername", "payeracc",  "amt"];
    const dataRows = csvText.slice(0).split('\n');

    let dataArray: any [] = [];
    dataRows.forEach((row) => {
      let values = row.split(',');
      let obj: any = new Object();

      for (let index = 0; index< propertyNames.length; index++){
        const propertyName: string = propertyNames[index];

        let val : any = values[index];
        if(val == ''){
          val = null;
        }

        obj[propertyName] = val;
      }

      dataArray.push(obj);
    });

    
    return dataArray;
  }
  
  
}
