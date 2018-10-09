import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  userid ;
   // tslint:disable-next-line:max-line-length
 emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   constructor(private formBuilder: FormBuilder, private router:ActivatedRoute) { }
   ngOnInit() {
     this.createFormControls();
     this.createForm();
     this.router.queryParams.subscribe(param=>{
      console.log(param);
    })
    this.router.params.subscribe(params=>{
      console.log(params);
      this.userid = params.id;
      this.getuserdetails();
    })
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
   getuserdetails(){
     console.log(this.userid);

   }
   edituser() {
     console.log('inside edit');
   }
}
