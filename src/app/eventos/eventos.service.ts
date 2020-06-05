import { Evento } from './eventos.model'
import { Injectable } from '@angular/core';
import { Ingresso } from '../shared/ingressos.model';
import { IngressoListaService } from '../ingressos-lista/ingressos-lista.service';
import { Subject } from 'rxjs';


@Injectable()
export class EventoService{
    eventosChanged = new Subject<Evento[]>();

    private eventos: Evento[] = [
        new Evento('Show do Simple Plan',
        'A banda chega para mais uma turnê no Brasil trazendo clássicos como Perfect e Welcome to my Life!',
        'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/2/4/0/20202.jpg',
        'Evento será realizado na data 29/06/2020.',
        [ new Ingresso('Meia entrada Simple Plan' , 200) , new Ingresso('Inteira Simple Plan' , 300)]),

        new Evento('Show de Sabrina Carpenter',
        'A cantora vem ao Brasil para fazer um show que vai arrasar com o coração de seus fãs, venha curtir essa maravilhosa apresentação',
        'https://media1.popsugar-assets.com/files/thumbor/GQ-S0taXWDMbQ4-OA5DDXN7i0G8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/19/000/n/1922283/2a09d3ed5d0abe8d509907.60971608_/i/Sabrina-Carpenter-Singing-Videos.jpg', 
        'Show será realizado no dia 13/12/2020.',
        [new Ingresso('Meia entrada Sabrina Carpenter' , 150) , new Ingresso('Inteira Sabrina Carpenter' , 250)])
      ];

      constructor(private ilService: IngressoListaService){
      }

      setEventos(eventos: Evento[]){
        return this.eventos.slice();
      }

      getEventos(){
          return this.eventos.slice();
      }

      getEvento(index:number){
        return this.eventos[index];
      }

      addIngressosToIngressoLista( ingressos : Ingresso[]){
        this.ilService.addIngressos(ingressos);
      }

      addEvento(evento: Evento){
        this.eventos.push(evento);
        this.eventosChanged.next(this.eventos.slice());
      }

      updateEvento(index:number, newEvento:Evento){
        this.eventos[index] = newEvento;
        this.eventosChanged.next(this.eventos.slice());
      }

      deleteEvento(index: number){
        this.eventos.splice(index, 1);
        this.eventosChanged.next(this.eventos.slice());
      }

}