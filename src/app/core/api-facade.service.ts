import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const BASE_URL = environment.restApiUrl;

@Injectable({
	providedIn: 'root',
})
export class ApiFacadeService {
	constructor(
		private http: HttpClient
	) {

	}

	private getCommonHeader(): HttpHeaders {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json; charset=utf-8');
		return headers;
	}

	/**
	 * Make http GET request to get data from back-end.
	 * @param requestUrl The http request URL right after the base URL. Eg. 'user/profile'.
	 * @param params Parameters to be passed into the api for filtering purposes.
	 */
	public httpRequestGet(requestUrl: string, params?: object): Observable<any> {
		const httpRequestOptions: any = {
			headers: this.getCommonHeader(),
		};

		if (params) {
			httpRequestOptions.params = params;
		}

		return this.http.get(
			`${BASE_URL}/${requestUrl}`,
			httpRequestOptions,
		);
	}

	/**
	 * Make http PUT request to update existing resoure at back-end.
	 * @param requestUrl The http request URL right after the base URL. Eg. 'user/profile'.
	 * @param payload The request payload to be passed into the PUT method as body. Put null if no payload is required.
	 */
	public httpRequestPut(requestUrl: string, payload: object): Observable<any> {
		const httpRequestOptions: any = {
			headers: this.getCommonHeader(),
		};

		return this.http.put(
			`${BASE_URL}/${requestUrl}`,
			payload,
			httpRequestOptions,
		);
	}

	/**
	 * Make http POST request to create a new resoure at back-end.
	 * @param requestUrl The http request URL right after the base URL. Eg. 'user/profile'.
	 * @param payload The request payload to be passed into the POST method as body. Put null if no payload is required.
	 */
	public httpRequestPost(requestUrl: string, payload: object): Observable<any> {
		const httpRequestOptions: any = {
			headers: this.getCommonHeader(),
		};

		return this.http.post(
			`${BASE_URL}/${requestUrl}`,
			payload,
			httpRequestOptions,
		);
	}

		/**
	 * Make http DELETE request to remove a resoure at back-end.
	 * @param requestUrl The http request URL right after the base URL. Eg. 'user/profile'.
	 */
	public httpRequestDelete(requestUrl: string): Observable<any> {
		const httpRequestOptions: any = {
			headers: this.getCommonHeader(),
		};

		return this.http.delete(
			`${BASE_URL}/${requestUrl}`,
			httpRequestOptions,
		);
	}
}
