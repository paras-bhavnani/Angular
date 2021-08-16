import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder) { }
  
  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    mobileNumber: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address: ['', Validators.required ],
    dob: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
  
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

  get f(){  
    return this.profileForm.controls;  
  }  

  public hasError = (controlName: string, errorName: string) =>{
    return this.profileForm.controls[controlName].hasError(errorName);
  }

  ngOnInit(): void { 
  }

}
