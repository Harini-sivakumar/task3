import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {
  employee:any;
  intro:any;

  constructor() { }

  ngOnInit(): void {
  
 this.employee=[
   {
     "id":1,
     "name":"HaRini",
     "city":"ERode",
     "basic":"5000",
     "HRA":"3000",
     "Allowance":"2000",
     "Total":"10000"
   },
   {
    "id":2,
    "name":"saRAth",
    "city":"coiMBATOre",
    "basic":"15000",
    "HRA":"7000",
    "Allowance":"3000",
    "Total":"25000"
  },
  {
    "id":3,
    "name":"SAMMY",
    "city":"NamaKKal",
    "basic":"18000",
    "HRA":"8000",
    "Allowance":"2000",
    "Total":"28000"
  },
  {
    "id":4,
    "name":"HaRI",
    "city":"chennai",
    "basic":"4000",
    "HRA":"3000",
    "Allowance":"1000",
    "Total":"8000"
  },
  {
    "id":5,
    "name":"VIshNU",
    "city":"SaLeM",
    "basic":"15000",
    "HRA":"5000",
    "Allowance":"3000",
    "Total":"23000"
  }
 ];
 this.intro=["hi. i am HARINI ShIyAM SIVA. I'm from kadapa, andhrapradesh."]
  }

}
