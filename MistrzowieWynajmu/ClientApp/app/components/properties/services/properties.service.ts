﻿import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Property } from '../../../models/property';
import { PropertiesBackendService } from '../../../services/properties-backend.service';

@Injectable()
export class PropertiesService {
    constructor(private propertiesBackenService: PropertiesBackendService) {}

    addProperty(newProperty: Property): Observable<number> {
        return this.propertiesBackenService.addProperty(newProperty);
    }

    getProperty(propertyId: number): Observable<Property> {
        return this.propertiesBackenService.getProperty(propertyId);
    }

    getProperties(): Observable<Property[]> {
        return this.propertiesBackenService.getProperties();
    }
    
    updateProperty(updateProperty: Property): Observable<number> {
        return this.propertiesBackenService.updateProperty(updateProperty);
    }

    deleteProperty(propertyId: number): Observable<number> {
        return this.propertiesBackenService.deleteProperty(propertyId);
    }

}