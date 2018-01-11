import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';
import { ApiClientService } from './shared/app-services/api-client.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		AppRoutingModule,
		SharedModule,
		BsDropdownModule.forRoot()
	],
	providers: [
		AppService,
		ApiClientService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
