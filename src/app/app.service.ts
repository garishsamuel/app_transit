import { Injectable } from '@angular/core';
import { ValidationService } from './shared/my-validation/validation.service';
import { ApiClientService } from './shared/app-services/api-client.service';

@Injectable()
export class AppService {

	apiService: any;
	customValidator: any;

	constructor (private apiClientService: ApiClientService) {
		this.apiService = apiClientService;
		this.customValidator = ValidationService;
	}

}
