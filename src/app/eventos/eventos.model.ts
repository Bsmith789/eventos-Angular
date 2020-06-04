import{ Ingresso }  from '../shared/ingressos.model'
    
export class Evento{
    public name: string;
    public descricao: string;
    public imagePath: string;
    public data:string;
    public ingressos: Ingresso[];

    constructor(name:string, descricao:string, imagePath:string, data:string , ingressos: Ingresso[]){
        this.name = name;
        this.descricao = descricao;
        this.imagePath = imagePath;
        this.data = data;
        this.ingressos = ingressos;
    }
}