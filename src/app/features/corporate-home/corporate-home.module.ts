import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateHomeRoutingModule } from './corporate-home-routing.module';
import { CorporateHomeComponent } from './corporate-home.component';
import { ApiClientService } from '../user-home/services/api-client.service';

@NgModule({
	imports: [
		CommonModule,
		CorporateHomeRoutingModule
	],
	declarations: [CorporateHomeComponent],
	providers: [
		ApiClientService
	]
})
export class CorporateHomeModule { }
