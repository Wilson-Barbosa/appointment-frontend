import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/interfaces/Client';
import { NewClient } from 'src/app/core/interfaces/NewClient';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
    selector: 'app-client-form-page',
    templateUrl: './client-form-page.component.html',
    styleUrls: ['./client-form-page.component.css']
})
export class ClientFormPageComponent implements OnInit {

    constructor(
        private clientService: ClientService,
        private router: ActivatedRoute,
    ) { }

    newClient: NewClient = {} as NewClient; // holds information of a new client to be saved
    client: Client = {} as Client;

    saveWasClicked: boolean = false;    // controls the error messages in the template

    // Creating the formGroup and its formControls
    saveClientFormGroup = new FormGroup(
        {
            id: new FormControl(),
            name: new FormControl('', [
                Validators.required
            ]),
            phone: new FormControl('', [
                Validators.required
            ]),
            dayOfBirth: new FormControl('', [
                Validators.required
            ])
        }
    );


    ngOnInit(): void {
        this.router.paramMap.subscribe(params => {
            // Gets an id value from the router
            let clientId = Number(params.get("id"));

            // Only if
            if (clientId != 0) {
                this.loadClient(clientId);
            }
        });
    }

    // Load the a client information on the screen
    public loadClient(id: number): void {
        this.clientService.getSingleClient(id).subscribe({
            next: (data) => {
                this.saveClientFormGroup.setValue(data);
            },
            error: () => {
                alert("Error when loading client");
            }
        });
    }

    // Gets called when attempting to save a new client
    public saveClient(): void {

        this.saveWasClicked = true; // sets it to true to show potential errors


        // Check if the form is valid
        if (this.saveClientFormGroup.valid) {

            // if the id is zero then it's a new client
            if (this.saveClientFormGroup.value.id == 0) {

                // Assigns the formgroupValue to NewClient attribute
                Object.assign(this.newClient, this.saveClientFormGroup.value);

                // Calling the service
                this.clientService.save(this.newClient).subscribe({
                    next: () => {
                        alert("User saved successfully!")
                        this.resetFormAndComponentAttributes();
                    },
                    error: () => {
                        alert("ERROR: user not saved!");
                    }
                });

            } else {
                // if the the id is not zero then it is an update

                // Assigns the formgroupValue to NewClient attribute
                Object.assign(this.client, this.saveClientFormGroup.value);

                this.clientService.updateClient(this.client).subscribe({
                    next: () => {
                        alert("User updated successfully!");
                        this.resetFormAndComponentAttributes();
                    },
                    error: () => {
                        alert("ERROR: user not updated!");
                    }
                });

            }
        }

    }

    // Resets formGroup's values and attributes from the component effectively reseting the page
    public resetFormAndComponentAttributes(): void {
        this.saveWasClicked = false;
        this.saveClientFormGroup.reset();
    }

    // Setter to access the form's control values (for error handling)
    get name(): any { return this.saveClientFormGroup.get('name'); }

    get phone(): any { return this.saveClientFormGroup.get('phone'); }

    get dayOfBirth(): any { return this.saveClientFormGroup.get('dayOfBirth'); }

}
