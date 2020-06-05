import { Component, OnInit, OnDestroy } from '@angular/core';
import { Evento } from '../eventos.model';
import { EventoService } from '../eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.css']
})
export class EventosListaComponent implements OnInit, OnDestroy {
  eventos: Evento[];
  subscription: Subscription;

  constructor(private eventoService: EventoService, private router:Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.subscription = this.eventoService.eventosChanged.subscribe(
      (eventos: Evento[]) => {
        this.eventos = eventos;
      }
    );
    this.eventos = this.eventoService.getEventos();
  }

  onNewEvento(){
    this.router.navigate(['new'] , {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
