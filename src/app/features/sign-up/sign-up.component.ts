import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  radVal: any;
  signUpForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.createSignUpForm();
    this.radVal = 'owner';
  }

  isSelected (val) {
      if(val.target.defaultValue === 'Owner') {
        this.radVal = 'owner';
      } else if(val.target.defaultValue === 'Traveller'){
        this.radVal = 'traveller';
      }
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
			firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      SSN: ['', Validators.required],
      address: ['', Validators.required],
      ownerVehicle: ['', Validators.required],
      mobile: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', Validators.required],
      registration: ['', Validators.required],
      bootspace: ['', Validators.required],
      route: ['', Validators.required],
      mode: ['', Validators.required]
    });
  }

}
