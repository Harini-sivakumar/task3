import { Component, OnInit } from '@angular/core';
import details from "../../details.json";

interface student {
  id:number;
  name:String;
  gender:String;
}
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})

export class HouseComponent implements OnInit {

student:student[]=details;
  selectedvalue:any;
  
  
  constructor() { }

  ngOnInit(): void {
    console.log("1")
  }

  

}