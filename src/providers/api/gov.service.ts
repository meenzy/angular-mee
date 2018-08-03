import { Injectable, Injector } from '@angular/core';
import { } from 'rxjs/add/operator/toPromise';
import { ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class GovService {
    private apiService: ApiService = this.injector.get(ApiService);

    constructor(private readonly injector: Injector) { }

    public getGovJson(): any {
        this.apiService.get('url', {})
        .toPromise()
        .then((response) => {console.log(response); return response;})
        .catch((error) => console.log(error));
    }
}