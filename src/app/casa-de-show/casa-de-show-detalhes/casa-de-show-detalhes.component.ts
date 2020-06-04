import { Component, OnInit } from '@angular/core';
import { CasaShow } from '../casa-de-show.model';
import { CasaShowService } from '../casa-de-show.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-casa-de-show-detalhes',
  templateUrl: './casa-de-show-detalhes.component.html',
  styleUrls: ['./casa-de-show-detalhes.component.css']
})
export class CasaDeShowDetalhesComponent implements OnInit {
  casaShow: CasaShow
  id:number;

  constructor(private casaShowService: CasaShowService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.casaShow = this.casaShowService.getCasaShow(this.id);
      }
    );
  }

  onEditCasaShow(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCasaShow(){
    this.casaShowService.deleteCasaShow(this.id);
    this.router.navigate(['/casa-de-show'])
  }

}
