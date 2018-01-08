import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../../app.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	loginForm: FormGroup;
	isError = false;
	errorMessage = '';
	validUsers = [];

	constructor (
		private router: Router, private fb: FormBuilder,
		private appGlobals: AppService
	) { }

	ngOnInit (): void {
		this.loginForm = this.fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
			userType: 'customer'
		});
		this.loadUsers();
	}

	onForgotPasswordClick (event): void {
		this.router.navigateByUrl('forgotpassword');
	}

	onSignUpClick (event): void {
		this.router.navigateByUrl('signup');
	}

	onLoginClick (event): void {
		if (this.loginForm.valid) {
			const loggedInUser = this.validUsers.find((useObj) => useObj['userName'] === this.loginForm.value.userName),
				loggedInUserType = this.loginForm.value.userType;
			if (loggedInUser) {
				this.isError = false;
				this.errorMessage = '';
				localStorage.setItem('userName', loggedInUser.userName);
				localStorage.setItem('firstName', loggedInUser.firstName);
				localStorage.setItem('lastName', loggedInUser.lastName);
				if (loggedInUserType === 'admin') {
					this.router.navigateByUrl('corporatehome');
				} else {
					this.router.navigateByUrl('userhome');
				}
			} else {
				this.isError = true;
				this.errorMessage = 'User Name / Password is Invalid';
			}
		} else {
			Object.keys(this.loginForm.controls).forEach(field => {
				const control = this.loginForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}
	}

	private loadUsers (): void {
		this.appGlobals.apiService.getData('/app_transit/api/RegisteredUsers.json').subscribe( data => {
			this.validUsers = data;
		});
	}
}
