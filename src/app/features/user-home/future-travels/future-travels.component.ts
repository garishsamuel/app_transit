import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';

@Component({
	selector: 'app-future-travels',
	templateUrl: './future-travels.component.html',
	styleUrls: ['./future-travels.component.scss']
})
export class FutureTravelsComponent implements OnInit {

	futureTravelsList = [];

	constructor (private apiClientService: ApiClientService) { }

	ngOnInit () {
		this.loadTravelList();
	}

	private loadTravelList (): void {
		this.apiClientService.getData('/api/FutureTravels.json').subscribe( data => {
			this.futureTravelsList = data;
		});
	}
}
