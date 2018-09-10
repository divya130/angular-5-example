import { Component, OnInit } from '@angular/core';
import { GeneralService } from './../../shared/services/httpcall.service';

 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users: Array<any>;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getlist();
  }
  getlist() {
    const url = 'api/users?page=1';
    this.generalService.getMethod(url).subscribe(val => {
      console.log(val);
      this.users = val.data;
    });

  }
}
