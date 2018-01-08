import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

	constructor() { }

	static getValidatorErrorMessage(label, validatorName: string, validatorValue?: any) {
		const config = {
			'required': `${label} is Required`,
			'invalidCreditCard': 'Is invalid credit card number',
			'invalidEmailAddress': 'Invalid email address',
			'invalid2decimalprecision': 'Please enter 2 decimal precision',
			'invalidFaxNumber': 'Invalid Fax Number',
			'invalidState': 'Please enter a valid state',
			'invalidWeight': 'Invalid weight',
			'invalidHandlingCap': 'Invalid Handling Capacity',
			'invalidAmount': 'Invalid Amount',
			'invalidQuantity': 'Invalid Quantity',
			'invalidZip': 'Please enter a valid Zip Code',
			'invalid4decimalprecision': 'Please enter 4 decimal precision',
			'allowNull': '',
			'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
			'minlength': `Minimum length ${validatorValue.requiredLength}`,
			'maxlength': `You have reached the maximum character limit ${validatorValue.requiredLength}`,
			'shorterComment': 'Please enter a shorter comment',
			'invalidRate': 'Please enter a valid amount',
			'invalidName': 'Please enter a valid Name',
			'invalidTime': 'Please choose a valid time',
			'invalid24Time': 'Please enter a valid military time',
			'invalidNumber': 'Please enter a valid number',
			'invalidValue': 'Special Characters are not allowed',
			'invalidComment': 'Please enter a valid comment',
			'invalidPhoneNumber': 'Please enter a valid Phone Number',
			'invalidMassQuantity': 'Please enter a valid Quantity',
			'invalidMeasurementCode': 'Please enter a valid number ',
			'invalidTechnicalName': 'You have reached the maximum character limit of 80 characters',
			'maxminlength': 'Min 50 charcters Max 250 Characters',
			'invalidViewName': 'Please enter a valid Name',
			'mandatory': 'Please enter',
			'mandatorySelect': 'Please select',
			'maxUnitQuantity': 'Reached maximum limit of 20 digits',
			'validDate': 'Please enter a valid Date'
		};
		return config[validatorName];
	}

	static emailValidator(control) {
		const pattern: RegExp = new RegExp(/\S+@\S+\.\S+/);
		if (control.value && control.value.match(pattern)) {
			return null;
		} else {
			return {
				'invalidEmailAddress': true
			};
		}
	}
	static passwordValidator(control) {
		if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
			return null;
		} else {
			return {
				'invalidPassword': true
			};
		}
	}

	static chargeRateQuantity(control) {
		/*
			Values allowed 0 - 99.99
		*/
		const pattern: RegExp = /^(\d{1,4}|\d\.\d{1,2}|\d{1,2}\.\d{1,2})$/;
		return pattern.test(control.value) ? null : {
			'invalid2decimalprecision': true
		};
	}

	static chargeRateCalculationAmount(control) {
		/*
			Values allowed 0 - 9999.9999
		*/
		const pattern: RegExp = /^(\d{1,4}|\d\.\d{1,4}|\d{1,4}\.\d{1,4})$/;
		return pattern.test(control.value) ? null : {
			'invalid4decimalprecision': true
		};
	}

	static stopMeasurement(control) {
		const pattern: RegExp = /^(\d{1,7}|\d\.\d{1,7}|\d{1,4}\.\d{1,4})$/;
		if (control.value && !pattern.test(control.value)) {
			return {
				'invalid74decimalprecision': true
			};
		}
	}

	static allowNull(control) {
		const pattern: RegExp = /[null]$/;
		if (pattern.test(control.value)) {
			return {
				'allowNull': true
			};
		}
	}

	static rateValidator(control) {
		const pattern: RegExp = /^\d+(?:\.\d{2})$/;
		return pattern.test(control.value) ? null : { 'invalidRate': true };
	}

	static timeValidator(control) {
		const pattern: RegExp = /^(0[1-9]|1[0-2])\:[0-5][0-9]\s*[ap]m$/i;
		return pattern.test(control.value) ? null : { 'invalidTime': true };
	}

	static validate24hrsTime(control) {
		const pattern: RegExp = /^([0-1]?[0-9]|2[0-3])(:[0-5][0-9])?$/;
		return pattern.test(control.value) ? null : { 'invalid24Time': true };
	}

	static phoneNumberCheck(control) {
		const pattern: RegExp = /^[0-9]{0,10}$/g;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static onlyNumber(control) {
		const pattern: RegExp = /^[0-9]{0,}$/g;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static decimalNumber(control) {
		const pattern: RegExp = /^[0-9]{0,}(?:\.[0-9]{0,})?$/i;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static decimalNumberUptoTwo(control) {
		const pattern: RegExp = /^[0-9]{0,}(?:\.[0-9]{0,2})?$/i;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static decimalNumber11Pre4(control) {
		const pattern: RegExp = /^[0-9]{0,7}(?:\.[0-9]{0,4})?$/i;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static decimalNumberUptoFour(control) {
		const pattern: RegExp = /^[0-9]{0,}(?:\.[0-9]{0,4})?$/i;
		if (control.value && !pattern.test(control.value)) {
			let value = '';
			if (control.value.length > 1) {
				value = control.value.substring(0, control.value.length - 1);
			}
			control.patchValue(value);
		}
	}

	static onlyAlpha(control) {
		const pattern: RegExp = /^[a-zA-Z]+$/;
		return pattern.test(control.value) ? null : { 'invalidName': true };
	}

	static alphaNumeric(control) {
		const pattern: RegExp = /^[A-Za-z0-9]{0,}$/i;
		return pattern.test(control.value) ? null : { 'invalidValue': true };
	}

	static commentValidator(control) {
		const pattern: RegExp = /^[A-Za-z0-9.,\s]{0,}$/i;
		if (control.value && !pattern.test(control.value)) {
			return { 'invalidComment': true };
		}
	}

	static maxLengthValidator(control) {
		const pattern: RegExp = /^[\s\S]{0,250}$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'maxlength': 250 };
		}
	}

	static massQuantity(control) {
		const pattern: RegExp = /^(\d{0,11}\.\d{0,4}|\d{0,11}|\.\d{0,4})$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'invalidMassQuantity': true };
		}
	}

	static measurementCode(control) {
		const pattern: RegExp = /^[0-9]{0,}$/i;
		if (control.value && !pattern.test(control.value)) {
			return { 'invalidMeasurementCode': true };
		}
	}

	static materialTechnicalName(control) {
		const pattern: RegExp = /^[\s\S]{0,80}$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'invalidTechnicalName': true };
		}
	}

	static viewNameValidator(control) {
		const pattern: RegExp = /^[A-Za-z\d\s]+$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'invalidViewName': true };
		}
	}

	static maxminLengthValidator(control) {
		const pattern: RegExp = /^[\s\S]{50,250}$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'maxminlength': true };
		}
	}

	static mandatory(control) {
		return control.value ? null : { 'mandatory': true };
	}

	static mandatorySelect(control) {
		return control.value ? null : { 'mandatorySelect': true };
	}

	static validDate(control) {
		return control.value ? '' : { 'validDate': true };
	}

	static maxUnitQuantity(control) {
		const pattern: RegExp = /^[\d]{0,20}$/;
		if (control.value && !pattern.test(control.value)) {
			return { 'maxUnitQuantity': true };
		}
	}

	static validateVenderFormPhone(control) {
		if (control.value && !(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(control.value))) {
			return { 'invalidPhoneNumber': true };
		}
	}

	static validateVendorFormEmail(control) {
		if (control.value && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value))) {
			return { 'invalidEmailAddress': true };
		}
	}

	static validateVendorFormFaxNumber(control) {
		if (control.value && !(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(control.value))) {
			return { 'invalidFaxNumber': true };
		}
	}

	static validateVendorFormState(control) {
		if (control.value && !(/^[A-Za-z]{2}$/.test(control.value))) {
			return { 'invalidState': true };
		}
	}

	static validateVendorFormZipCode(control) {
		if (control.value && !(/^\d{5}(?:[-\s]\d{4})?$/.test(control.value))) {
			return { 'invalidZip': true };
		}
	}

	static validateLineItemTotalWeight(control) {
		if ( control.value && !(/^[-+]?\d{0,6}(\.\d{1,2})?$/.test(control.value))) {
			return { 'invalidWeight': true };
		}
	}

	static validateHandlingCapacity(control) {
		if (control.value && !(/[0-9\ ]/.test(control.value))) {
			return { 'invalidHandlingCap': true };
		}
	}

	static validateChargeAmount(control) {
		const pattern: RegExp = /^-?(\d{1,6}|\d\.\d{1,2}|-?\d{1,6}\.\d{1,2})$/;
		return pattern.test(control.value) ? null : { 'invalidAmount': true };
	}

	static validateChargeQuantity(control) {
		const pattern: RegExp = /^(\d{1,6}|\d\.\d{1,2}|\d{1,6}\.\d{1,2})$/;
		return pattern.test(control.value) ? null : { 'invalidQuantity': true };
	}
}
