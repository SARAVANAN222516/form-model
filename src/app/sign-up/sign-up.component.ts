import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myGroup:FormGroup; 

  constructor() { }

  ngOnInit() {
    this.myGroup=new FormGroup({
      'info':new FormGroup({
        'firstname':new FormControl('',Validators.required),
        'lastname':new FormControl('',Validators.required),
        'email' :new FormControl ('',Validators.required)

      }),
      password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(7)]),
      cpassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(7)])
      
    },{validators:this.MustMatch()});
    
     
  }
  
  handleSubmit(){
    console.log(this.myGroup)
  }
  MustMatch(){
    return(group:FormGroup)=>{
      const password=group.controls.password.value;
    const cpassword=group.controls.cpassword.value;
    console.log(password,cpassword)
    return password===cpassword?null:{mismatch:true};
  }
  }
  handleClick(){
    this.myGroup.patchValue({
      firstname:"mr.",
      lastname:"sara",
      email:"eample@gmail.com",
      password:"1235465",
      cpassword:"1234566"
    }); 
    
  }
  }



