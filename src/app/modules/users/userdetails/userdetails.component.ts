import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  submitted = false;
   // tslint:disable-next-line:max-line-length
 emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   constructor(private formBuilder: FormBuilder) { }
   ngOnInit() {
     this.createFormControls();
     this.createForm();
   }
   createFormControls() {
     this.firstname = new FormControl('', [
       Validators.required     ]);
     this.lastname = new FormControl('', [
       Validators.required
     ]);
   }
 
   createForm() {
     this.userForm = new FormGroup({
       firstname: this.firstname,
       lastname: this.lastname
     });
   }
   edituser() {
     console.log('inside edit');
   }
}
