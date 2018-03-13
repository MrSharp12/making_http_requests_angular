import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//Injectable is needed if you plan on injecting a service into a service
//we will need to subscribe for this post to work
@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://ng-angular-http-62ddc.firebaseio.com/data.json', 
        //     servers, 
        //     {headers: headers});
        return this.http.put('https://ng-angular-http-62ddc.firebaseio.com/data.json', 
            servers, 
            {headers: headers});
    }
    getServers() {
        return this.http.get('https://ng-angular-http-62ddc.firebaseio.com/data.json')
        //with map, we are transforming the data here, keeping it in a central place
        .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        )
        //catch allows for centralized error transformation
        .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong');
            }
        );
    }
 }