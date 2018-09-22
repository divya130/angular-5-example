import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/httpcall.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Array<any>;
  searchtext;
  currentPage = 4;
  page = 1;
 totalItems = 0;
 per_page: number;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getlist();
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }
  getlist() {
    const url = 'api/users?page=' + this.page;
    this.generalService.getMethod(url).subscribe(val => {
      console.log(val);
      this.users = val.data;
      this.per_page = val.per_page;
      this.totalItems = val.total;
    });

  }
}
