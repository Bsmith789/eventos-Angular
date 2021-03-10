import { Subject } from 'rxjs'
import { Ingresso } from '../shared/ingressos.model';
import { Injectable } from "@angular/core";

@Injectable()
export class IngressoListaService {
    ingressosChanged = new Subject<Ingresso[]>();
    startedEditing = new Subject<number>();

    private ingressos: Ingresso[] = [
      ];

    getIngressos(){
        return this.ingressos.slice();
    }

    getIngresso(index:number){
        return this.ingressos[index];
    }

    addIngresso(ingresso:Ingresso){
        this.ingressos.push(ingresso);
        this.ingressosChanged.next(this.ingressos.slice());
    }

    addIngressos(ingressos:Ingresso[]){
        this.ingressos.push(...ingressos);
        this.ingressosChanged.next(this.ingressos.slice());
    }

    updateIngresso(index: number, newIngresso: Ingresso){
        this.ingressos[index] = newIngresso;
        this.ingressosChanged.next(this.ingressos.slice());
    }

    deleteIngresso(index: number){
        this.ingressos.splice(index, 1);
        this.ingressosChanged.next(this.ingressos.slice());
    }

}