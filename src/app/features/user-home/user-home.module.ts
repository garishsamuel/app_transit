import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './user-home.component';
import { FutureTravelsComponent } from './future-travels/future-travels.component';
import { ApiClientService } from './services/api-client.service';
import { TourPlannerComponent } from './tour-planner/tour-planner.component';
import { ParcelsDeliveredComponent } from './parcels-delivered/parcels-delivered.component';
import { ParcelsAvailableComponent } from './parcels-available/parcels-available.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		UserHomeRoutingModule,
		SharedModule
	],
	declarations: [
		UserHomeComponent,
		FutureTravelsComponent,
		TourPlannerComponent,
		ParcelsDeliveredComponent,
		ParcelsAvailableComponent
	],
	providers: [
		ApiClientService
	]
})
export class UserHomeModule { }
