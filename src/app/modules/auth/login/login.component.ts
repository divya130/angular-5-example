import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  Login(data: NgForm) {
    const email: string = data.value.email;
    const password: string = data.value.password;
    localStorage.setItem('loginStatus', 'true');
    data.reset();
this.router.navigate(['/users']);
  }
}
