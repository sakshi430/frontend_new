import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {

  constructor() { }

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
            let csv: string = reader.result as string;
            console.log(csv);
         }

      }
  }
  
}
