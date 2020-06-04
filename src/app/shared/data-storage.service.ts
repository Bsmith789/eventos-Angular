import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoService } from '../eventos/eventos.service';
import { Evento } from '../eventos/eventos.model';
import { map , tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root'})
export class DataStorageService{
    baseUrl = "http://localhost:2001/eventos";

    constructor(private http: HttpClient, private eventoService: EventoService){

    }

    storeEventos(){
        const eventos = this.eventoService.getEventos();
        this.http.put(this.baseUrl, eventos ).subscribe(response => {
            console.log(response);
        });
    }

    fetchEventos(){
        return this.http.get<Evento[]>(this.baseUrl).pipe(map(eventos => {
            return eventos.map(evento =>{
                return {...evento , ingressos: evento.ingressos ? evento.ingressos : []};
            });
        }),
        tap(eventos => {
            this.eventoService.setEventos(eventos);
        })
        )
    }



}