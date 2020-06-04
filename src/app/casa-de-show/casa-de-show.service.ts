import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CasaShow } from './casa-de-show.model';

@Injectable()
export class CasaShowService{
    casaShowChanged = new Subject<CasaShow[]>();

    private casaShows: CasaShow[] = [
        new CasaShow('Casa do Seu Zé ', 'Rua do Jaraguá' , '500' , [])
    ]

    constructor(){

    }

    getCasaShows(){
        return this.casaShows.slice();
    }

    getCasaShow(index: number){
        return this.casaShows[index];
    }

    addCasaShow(casaShow: CasaShow){
        this.casaShows.push(casaShow);
        this.casaShowChanged.next(this.casaShows.slice());
    }

    updateCasaShow(index: number , newCasaShow:CasaShow){
        this.casaShows[index] = newCasaShow;
        this.casaShowChanged.next(this.casaShows.slice());
    }

    deleteCasaShow(index: number){
        this.casaShows.splice(index, 1);
        this.casaShowChanged.next(this.casaShows.slice());
    }

}