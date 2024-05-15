import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Observable } from 'rxjs';
import { NewClient } from '../interfaces/NewClient';

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

    // Saves a client
    public save(client: NewClient): Observable<void> {
        return this.http.post<void>(this.baseUrl, client);
    }

    // Get a single client by their id
    public getSingleClient(id: number): Observable<Client> {
        return this.http.get<Client>(this.baseUrl + `/${id}`);
    }

    // Updates a client
    public updateClient(client: Client): Observable<void> {

        const url: string = this.baseUrl + `/${client.id}`;

        return this.http.put<void>(url, client);
    }


}
