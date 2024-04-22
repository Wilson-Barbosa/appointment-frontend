import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/interfaces/Client';
import { Page } from 'src/app/core/interfaces/Page';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
    selector: 'app-clients-table-page',
    templateUrl: './clients-table-page.component.html',
    styleUrls: ['./clients-table-page.component.css']
})
export class ClientsTablePageComponent implements OnInit {

    constructor(private clientService: ClientService) { }


    // Attribute that holds the value of a filter input
    nameFilter: string = '';

    // Page Object, containing information on the number of clients and the content.
    // This attribute is used to create the pagination
    clientPage: Page<Client> = {} as Page<Client>;

    // By default the initial page is obviously 1 (applied on first rendering)
    page: number = 1;

    // Loads the list of clients upon component creation (first rendering)
    public ngOnInit(): void {
        this.loadClients();
    }


    // Controls the page change on the screen
    public pageChangeControl(): void {
        this.loadClients();
    }


    // Searches for all clients in the database
    public loadClients(): void {
        this.clientService.getClients(this.nameFilter, this.page).subscribe({
            next: (response) => {
                // Assigns the body (array of clients) to content
                this.clientPage.content = response.body;

                // Gets the total amount of clients within the response (access via responser header)
                this.clientPage.numberOfElements = parseInt(response.headers.get("X-Total-Count") || "0");
            }
        });
    }


    // Delete a client from the list
    public deleteClient(id: number): void {
        // Calls the service to delete
        this.clientService.delete(id).subscribe({
            next: () => {
                alert("deletion successfull");

                // Realoads the list after each successfull deletion
                this.loadClients();
            },
            error: () => {
                alert("error when deleting a client");
            }
        });


    }


}
