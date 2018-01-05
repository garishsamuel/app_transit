import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
	imports: [
		CommonModule,
		SignUpRoutingModule,
		ReactiveFormsModule,
		FormsModule
	],
	declarations: [SignUpComponent]
})
export class SignUpModule { }
