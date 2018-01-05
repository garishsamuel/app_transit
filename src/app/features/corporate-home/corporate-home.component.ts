import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../user-home/services/api-client.service';

@Component({
	selector: 'app-corporate-home',
	templateUrl: './corporate-home.component.html',
	styleUrls: ['./corporate-home.component.scss']
})
export class CorporateHomeComponent implements OnInit {

	deliveredDetails: any;
	selToken: any;
	statusShow: any;

	constructor (private apiClientService: ApiClientService) { }

	ngOnInit() {
		this.loadTravelList();
	}

	status(e, seltoken): void {
		if (this.statusShow === 'clicked') {
			this.statusShow = 'notClicked';
		} else {
			this.statusShow = 'clicked';
			this.selToken = seltoken;
		}
	}
	loadTravelList (): void {
		this.apiClientService.getData('/api/status.json').subscribe( data => {
			this.deliveredDetails = data;
		});
	}
}
