import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Evento } from './eventos.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class EventoResolverService implements Resolve<Evento[]> {
    constructor(private dataStorageService: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.dataStorageService.fetchEventos();
    }

}