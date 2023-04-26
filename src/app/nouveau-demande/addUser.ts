import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {  User } from '../models/userModel';
import { matchValidator, uppercaseValidator } from '../services/form-validators';
import { UserSevicesService } from '../services/user-sevices.service';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent {
user: User = new User()
// userRole: Role= new Role()
myForm : FormGroup = new FormGroup({})

constructor(
  private _userSevice : UserSevicesService,
  private router: Router,
  private fb : FormBuilder
){
  this.myForm=new FormGroup({
    userName : new FormControl('',[Validators.minLength(3),Validators.required,Validators.maxLength(20)]),
    email : new FormControl('',[Validators.email,Validators.required]),
    domain : new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2)]),
    ville : new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2)]),
    pays : new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2)]),
    phonenumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+216-?)|0)?[0-9]{8}$")]),
    password : new FormControl('',[Validators.required,
      uppercaseValidator,
      Validators.minLength(5),
      Validators.maxLength(25),
      matchValidator('confirmPassword', true)
    ]),
    confirmPassword : new FormControl('',[Validators.required,
    matchValidator('password')]),
    isPartner : new FormControl('',),
   isPassager : new FormControl('',)
});
}

<form [formGroup]="myForm" autocomplete="on">

ngOnInit(): void{}

getData(){
  this.user = new User()
  this.user.userName = this.myForm.get("userName")?.value 
  this.user.email = this.myForm.get("email")?.value 
  this.user.ville = this.myForm.get("ville")?.value 
  this.user.pays = this.myForm.get("pays")?.value 
  this.user.domain = this.myForm.get("domain")?.value 
  this.user.phonenumber = this.myForm.get("phonenumber")?.value
  this.user.password = this.myForm.get("password")?.value 
  this.user.confirmPassword = this.myForm.get("confirmPassword")?.value 
  this.user.isPartner = this.myForm.get("isPartner")?.value ? true : false 
  this.user.isPassager = this.myForm.get("isPassager")?.value ? true : false
  // this.user.isPartner = this.userRole.isPartner
  // this.user.isPassager = this.userRole.isPassager

  // console.log(this.user)
}
addUser(){
  this.getData()
  //console.log(this.user)
  this._userSevice.createUser(this.user).subscribe(
    (data) => {
      this.router.navigate(['../login'])
    },
    (error) =>console.error(error)
    );
  this.user = new User();
}

}
