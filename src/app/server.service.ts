import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
//Injectable is needed if you plan on injecting a service into a service
//we will need to subscribe for this post to work
@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://ng-angular-http-62ddc.firebaseio.com/data.json', 
            servers, 
            {headers: headers});
    }
    getServers() {
        return this.http.get('https://ng-angular-http-62ddc.firebaseio.com/data.json');
    }
 }