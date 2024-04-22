import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient){}

    baseUrl: string = "http://localhost:3000/clients"

    // Gets clients who's name contains a keyword
    public getClients(keyword: string, page: number): Observable<HttpResponse<Client[]>> {

        // URL that makes a request
        let url: string = this.baseUrl + `?name_like=${keyword}` + `&_page=${page}`;

        return this.http.get<Client[]>(url, {observe: 'response'});
    }

    // Deletes a client
    public delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }


}
