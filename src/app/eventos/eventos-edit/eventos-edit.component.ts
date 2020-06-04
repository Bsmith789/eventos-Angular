import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { EventoService } from '../eventos.service';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.css']
})
export class EventosEditComponent implements OnInit {
  id: number;
  editMode = false;
  eventoForm: FormGroup;

  constructor(private route: ActivatedRoute, private eventoService: EventoService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.id = +params['id'];
      this.editMode = params ['id'] != null;
      this.initForm();
      }
    );
  }

  onSubmit(){
    if (this.editMode){
      this.eventoService.updateEvento(this.id, this.eventoForm.value);
    } else{
      this.eventoService.addEvento(this.eventoForm.value);
    }
    this.onCancel();
  }

  onAddIngresso(){
    (<FormArray>this.eventoForm.get('ingressos')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'quantidade': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngresso(index: number){
    (<FormArray>this.eventoForm.get('ingressos')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let eventoName = '';
    let eventoImagePath = '';
    let eventoDescricao = '';
    let eventoIngressos = new FormArray([]);

    if(this.editMode){
      const evento = this.eventoService.getEvento(this.id);
      eventoName = evento.name;
      eventoImagePath = evento.imagePath;
      eventoDescricao = evento.descricao;
      if ( evento['ingressos']){
        for(let ingresso of evento.ingressos)
          eventoIngressos.push(new FormGroup({
            'name': new FormControl(ingresso.name, Validators.required),
            'quantidade': new FormControl(ingresso.quantidade, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
          );
      }
    }

    this.eventoForm = new FormGroup({
      'name': new FormControl(eventoName, Validators.required),
      'imagePath': new FormControl(eventoImagePath, Validators.required),
      'descricao': new FormControl(eventoDescricao, Validators.required),
      'ingressos': eventoIngressos
    });
  }
  get controls(){
    return (<FormArray>this.eventoForm.get('ingressos')).controls;
  }
}
