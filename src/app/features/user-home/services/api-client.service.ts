import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, ResponseContentType, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiClientService {

	constructor (private http: Http) { }

	getData(url, headers?) {
		const defaultOptions = new RequestOptions({
			headers: this.addHeaders(headers)
		});
		return this.http.get(url, defaultOptions)
		.map((res: Response) => {
			return res.json();
		})
		.catch((err: Response) => {
			return Observable.throw(err);
		});
	}

	addHeaders(headerParams: any): any {
		const headers = new Headers({
			'Content-Type': 'application/json'
		});
		headers.append('Cache-Control', 'no-cache');
		headers.append('Pragma', 'no-cache');
		for (const i in headerParams) {
			if (headerParams.hasOwnProperty(i)) {
				headers.append(i, headerParams[i]);
			}
		}
		return headers;
	}

}

