import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-home',
	templateUrl: './user-home.component.html',
	styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

	homeTitle = 'Home';

	constructor (private router: Router) { }

	ngOnInit() {
	}

	onHomeClick (event): void {
		this.homeTitle = 'Home';
		this.router.navigateByUrl('userhome');
	}
	onFutureTravelsClick (event): void {
		this.homeTitle = 'Future Travels';
		this.router.navigateByUrl('userhome/futuretravels');
	}

	onParcelsDeliveredClick (event): void {
		this.homeTitle = 'Parcels Delivered';
		this.router.navigateByUrl('userhome/parcelsdelivered');
	}

	onTourPlannerClick (event): void {
		this.homeTitle = 'Tour Planner';
		this.router.navigateByUrl('userhome/tourplanner');
	}

	onParcelsAvailableClick (event): void {
		this.homeTitle = 'Parcels Available';
		this.router.navigateByUrl('userhome/parcelsavailable');
	}
}
