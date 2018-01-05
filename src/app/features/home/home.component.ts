import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	loginForm: FormGroup;
	constructor (
		private router: Router, private fb: FormBuilder
	) { }

	ngOnInit (): void {
		this.loginForm = this.fb.group({
			userName: '',
			password: ''
		});
	}

	onForgotPasswordClick (event): void {
		this.router.navigateByUrl('forgotpassword');
	}

	onSignUpClick (event): void {
		this.router.navigateByUrl('signup');
	}

	onLoginClick (event): void {
		this.router.navigateByUrl('userhome');
	}
}
