import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { FutureTravelsComponent } from './future-travels/future-travels.component';
import { ParcelsDeliveredComponent } from './parcels-delivered/parcels-delivered.component';
import { TourPlannerComponent } from './tour-planner/tour-planner.component';
import { ParcelsAvailableComponent } from './parcels-available/parcels-available.component';

const routes: Routes = [{
	path: '',
	component: UserHomeComponent,
	children: [
		{
			path: 'futuretravels',
			component: FutureTravelsComponent,
		},
		{
			path: 'parcelsdelivered',
			component: ParcelsDeliveredComponent,
		},
		{
			path: 'tourplanner',
			component: TourPlannerComponent,
		},
		{
			path: 'parcelsavailable',
			component: ParcelsAvailableComponent
		}
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserHomeRoutingModule { }
