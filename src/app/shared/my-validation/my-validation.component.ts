import { Component, OnInit, Input } from '@angular/core';
import { ValidationService } from './validation.service';

@Component({
	selector: 'app-validator-message',
	templateUrl: './my-validation.component.html',
	styleUrls: ['./my-validation.component.scss']
})
export class MyValidationComponent implements OnInit {

	@Input() control: any;
	@Input() customMessage: any;
	@Input() label: any = '';

	constructor() { }

	ngOnInit() {
	}

	get errorMessage() {
		for (const propertyName in this.control.errors) {
			if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
				return ValidationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
			}
		}
		return null;
	}

	get fieldLabel() {
		for (const propertyName in this.control.errors) {
			if (propertyName === 'mandatory') {
				return this.customMessage;
			} else if (propertyName === 'mandatorySelect') {
				return this.customMessage;
			}
		}
		return null;
		}
}


