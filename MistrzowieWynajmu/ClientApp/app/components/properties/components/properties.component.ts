import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property';
import { PropertiesService } from '../services/properties.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './properties.component.html'
})

export class PropertiesComponent implements OnInit {
    constructor(
        private propertiesService: PropertiesService,
        private router: Router
    ) { }

    properties: Array<Property> = new Array<Property>();
    pageTitle: string = "Lista dostępnych nieruchomości";
    tempInfo: string = "Ładowanie danych...";

    ngOnInit(): void {

        //this.propertiesService.getProperties().subscribe(
        //    props => { console.log("Properties:", props) },
        //    error => { console.log("Error: ", error) }
        //);

        this.downloadProperties();
    }

    downloadProperties(): void {
        this.propertiesService.getProperties().subscribe(
            propertiesFromDb => {
                if (propertiesFromDb.length == 0) {
                    this.tempInfo = "Brak danych";
                } else {
                    this.properties = propertiesFromDb;
                }
            },
            error => console.log(error)
        )
    }

    getProperty(id: number): void {
        this.router.navigate(['./properties/property-details', id]);
    }
    updateProperty(id: number): void {
        this.router.navigate(['./properties/property-update', id]);
    }
    deleteProperty(id: number): void {
        this.propertiesService.deleteProperty(id).subscribe(
            onSuccess => {
                console.log(onSuccess);
                this.properties.splice(this.properties.findIndex(prop => prop.id == id), 1);
            },
            onError => console.log(onError)
        );
        //this.properties.splice(this.properties.findIndex(prop => prop.id == id), 1);
    }
}