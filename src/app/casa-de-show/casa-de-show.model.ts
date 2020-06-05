import { Evento } from '../eventos/eventos.model';

export class CasaShow{
    public name:string;
    public endereco:string;
    public capacidade:string;
    public evento:Evento[];

    constructor(name:string , endereco:string, capacidade:string , evento:Evento[]){
        this.name = name;
        this.endereco = endereco;
        this.capacidade = capacidade;
        this.evento = evento;
    }
}