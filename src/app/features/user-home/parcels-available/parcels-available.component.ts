import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-parcels-available',
  templateUrl: './parcels-available.component.html',
  styleUrls: ['./parcels-available.component.scss']
})
export class ParcelsAvailableComponent implements OnInit {

  deliveredDetails: any;
  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.loadParcelAvailable();
  }
  loadParcelAvailable (): void {
		this.apiClientService.getData('/api/parcelsDelivered.json').subscribe( data => {
      this.deliveredDetails = data;
    });
  }

}
