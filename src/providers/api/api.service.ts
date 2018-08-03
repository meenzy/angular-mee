import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {   
    private readonly httpClient: HttpClient = this.injector.get(HttpClient);
    private readonly apiUrl : string = '';
    constructor(private readonly injector: Injector) { }

    public get(endpoint: string, reqOptions: any) {
        if(!reqOptions) {
            reqOptions = {
                params: new HttpParams()
            };
        }
        return this.httpClient.get(this.apiUrl, reqOptions);            
    }   
}