import { Component, OnInit } from '@angular/core';
import { Evento } from '../eventos.model';
import { EventoService } from '../eventos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.component.html',
  styleUrls: ['./eventos-detalhes.component.css']
})
export class EventosDetalhesComponent implements OnInit {
  evento: Evento;
  id: number;

  constructor(private eventoService: EventoService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.evento = this.eventoService.getEvento(this.id);
    }
    );
  }

  onAddToIngressoLista(){
    this.eventoService.addIngressosToIngressoLista(this.evento.ingressos);
  }

  onEditEvento(){
    this.router.navigate(['edit'] , {relativeTo: this.route} );
  }

  onDeleteEvento(){
    this.eventoService.deleteEvento(this.id);
    this.router.navigate(['/eventos']);
  }

}
