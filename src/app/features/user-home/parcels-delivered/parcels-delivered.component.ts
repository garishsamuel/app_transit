import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-parcels-delivered',
  templateUrl: './parcels-delivered.component.html',
  styleUrls: ['./parcels-delivered.component.scss']
})
export class ParcelsDeliveredComponent implements OnInit {

  deliveredDetails: any;
  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.loadTravelList();
  }
  loadTravelList (): void {
		this.apiClientService.getData('/app_transit/api/parcelsDelivered.json').subscribe( data => {
      this.deliveredDetails = data;
		});
	}

}
