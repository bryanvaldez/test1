import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from 'src/app/constants/params.constant';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
        console.log('service User');
    }
    save(data: any) {
        return this.http.post(Params.SERVER_URL + 'user/create', data);
    }
}
