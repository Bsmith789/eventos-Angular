import { Component, OnInit, OnDestroy} from '@angular/core';
import { CasaShow } from '../casa-de-show.model';
import { Subscription } from 'rxjs';
import { CasaShowService } from '../casa-de-show.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casa-de-show-lista',
  templateUrl: './casa-de-show-lista.component.html',
  styleUrls: ['./casa-de-show-lista.component.css']
})
export class CasaDeShowListaComponent implements OnInit, OnDestroy {
  casaShows: CasaShow[];
  subscription: Subscription;


  constructor(private casaShowService: CasaShowService, private router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.casaShowService.casaShowChanged.subscribe(
      (casaShows: CasaShow[]) => {
        this.casaShows = casaShows;
      }
    );
    this.casaShows = this.casaShowService.getCasaShows();
  }

  onNewCasaShow(){
    this.router.navigate(['new'] , {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
