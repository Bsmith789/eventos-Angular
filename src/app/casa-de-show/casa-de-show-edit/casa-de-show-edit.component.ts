import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CasaShowService } from '../casa-de-show.service';

@Component({
  selector: 'app-casa-de-show-edit',
  templateUrl: './casa-de-show-edit.component.html',
  styleUrls: ['./casa-de-show-edit.component.css']
})
export class CasaDeShowEditComponent implements OnInit {
  id:number;
  editMode = false;
  casaShowForm: FormGroup;

  constructor(private route: ActivatedRoute, private casaShowService: CasaShowService, private router: Router) {

   }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params ['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    if(this.editMode){
      this.casaShowService.updateCasaShow(this.id, this.casaShowForm.value);
    } else{
      this.casaShowService.addCasaShow(this.casaShowForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let casaShowName = '';
    let casaShowEndereco = '';
    let casaShowCapacidade = '';

    if(this.editMode){
      const casaShow = this.casaShowService.getCasaShow(this.id);
      casaShowName = casaShow.name;
      casaShowEndereco = casaShow.endereco;
      casaShowCapacidade = casaShow.capacidade;
    }
    this.casaShowForm = new FormGroup({
      'name': new FormControl(casaShowName, Validators.required),
      'endereco': new FormControl(casaShowEndereco, Validators.required),
      'capacidade': new FormControl(casaShowCapacidade, Validators.required)
    });
  }

}
