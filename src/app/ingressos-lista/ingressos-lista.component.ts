import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingresso } from '../shared/ingressos.model';
import { IngressoListaService } from './ingressos-lista.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingressos-lista',
  templateUrl: './ingressos-lista.component.html',
  styleUrls: ['./ingressos-lista.component.css']
})
export class IngressosListaComponent implements OnInit, OnDestroy {
  ingressos: Ingresso[];
  private igChangeSub: Subscription;

  constructor(private ilService : IngressoListaService) { }

  ngOnInit(): void {
    this.ingressos = this.ilService.getIngressos();
    this.igChangeSub = this.ilService.ingressosChanged.subscribe((ingressos : Ingresso[]) => {
      this.ingressos = ingressos;
    }
    );
  }

  onEditItem(index:number){
    this.ilService.startedEditing.next(index);
  }

  ngOnDestroy(): void{
    this.igChangeSub.unsubscribe();
  }

}
