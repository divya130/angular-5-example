import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  search;
  array = [{
    title:'Karnataka',
    name:'bangalore'
  },{
    title:'Karnataka',
    name:'mysore'
  },{
    title:'Tamil Nadu',
    name:'Chennai'
  },{
    title:'Tamil Nadu',
    name:'Coimbatore'
  },{
    title:'Maharastra',
    name:'Mumbai'
  },{
    title:'Andra Pradesh',
    name:'Hydrabad'
  },{
    title:'Tamil Nadu',
    name:'Thiruvanamalai'
  },{
    title:'kerala',
    name:'kochi'
  },{
    title:'kerala',
    name:'Munnar'
  },{
    title:'Karnataka',
    name:'Mandya'
  }]
  constructor() { }

  ngOnInit() {
    
  }

}
