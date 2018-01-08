import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyValidationComponent } from './my-validation/my-validation.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		MyValidationComponent
	],
	exports: [
		MyValidationComponent
	]
})
export class SharedModule { }
