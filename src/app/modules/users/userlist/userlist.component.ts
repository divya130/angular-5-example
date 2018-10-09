import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/httpcall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Array<any>;
  // user = Object  or {}
  searchtext;
  currentPage = 4;
  page = 1;
 totalItems = 0;
 per_page: number;
  constructor(private generalService: GeneralService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.getlist();
   
  }
  routeto(userid){
  
this.route.navigate(['/user',userid]);
  }
  pageChanged(event: any): void {
    this.page = event.page;
  }
  getlist() {
    const url = 'api/users?page=' + this.page;//define

    // return
 this.generalService.getMethod(url).subscribe(data => {
      console.log(data);
      this.users = data.data;
      this.per_page = data.per_page;
      this.totalItems = data.total;
    },(error)=>{
      
    });

  }
}
