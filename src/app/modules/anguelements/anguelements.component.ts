import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anguelements',
  templateUrl: './anguelements.component.html',
  styleUrls: ['./anguelements.component.css']
})
export class AnguelementsComponent implements OnInit {
  languagelist :any[];
  constructor() { }

  ngOnInit() {
    this.languagelist = [
      {'id':1,'name':'English'},
      {'id':2,'name':'Telugu'},
      {'id':3,'name':'kannada'},
      {'id':4,'name':'Tamil'},
      {'id':5,'name':'Malayalam'},
      {'id':6,'name':'Hindi'},
      {'id':7,'name':'Urdu'},
      {'id':8,'name':'Korean'},
      
     ]
  }
  removelang(index){
console.log(index);
this.languagelist.splice(index,1);
  }
}
