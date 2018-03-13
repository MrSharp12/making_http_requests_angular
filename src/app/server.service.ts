import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
//Injectable is needed if you plan on injecting a service into a service
//we will need to subscribe for this post to work
@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        return this.http.post('https://ng-angular-http-62ddc.firebaseio.com/data.json', servers);
    }
 }