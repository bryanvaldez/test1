import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Params } from 'src/app/constants/params.constant';

@Injectable({
    providedIn: 'root'
})
export class ReporteService {
    constructor(private http: HttpClient) {
    }
    get_RL_ORGANIZACION(data: any) {
        const url = Params.SERVER + 'reporte/R_organizacion';
        const params = JSON.stringify(data);
        const hdrs = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post<HttpResponse<any>>(url, params, { headers: hdrs, observe: 'response'});
    }

}
