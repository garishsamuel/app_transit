import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {
	Event as RouterEvent, NavigationCancel, NavigationEnd,
	NavigationError, NavigationStart, Router
} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';
	userName = '';

	constructor (private router: Router) {}

	ngOnInit (): void {
		localStorage.clear();
		this.loadUserName();
		this.router.events.subscribe((event: RouterEvent) => {
			this.navigationInterceptor(event);
		});
	}

	private loadUserName (): void {
		if (localStorage.getItem('userName')) {
			this.userName = localStorage.getItem('firstName').charAt(0) +
							localStorage.getItem('lastName').charAt(0);
		} else {
			this.userName = '';
		}
	}

	private navigationInterceptor (event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			if (event.url === '/userhome' || event.url === '/corporatehome') {
				this.loadUserName();
			} else if (event.url === '/home') {
				localStorage.clear();
				this.loadUserName();
			}
		} else if (event instanceof NavigationEnd) {

		} else if (event instanceof NavigationCancel) {

		} else if (event instanceof NavigationError) {

		}
	}
}
