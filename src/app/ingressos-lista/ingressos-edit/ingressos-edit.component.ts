import { Component, OnInit, OnDestroy, ViewChild, } from '@angular/core';
import { Ingresso } from 'src/app/shared/ingressos.model';
import { IngressoListaService } from '../ingressos-lista.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingressos-edit',
  templateUrl: './ingressos-edit.component.html',
  styleUrls: ['./ingressos-edit.component.css']
})
export class IngressosEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ilForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingresso;

  constructor(private ilService: IngressoListaService) { }

  ngOnInit(): void {
    this.subscription = this.ilService.startedEditing.subscribe((index:number) =>{
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.ilService.getIngresso(index);
      this.ilForm.setValue({
        name: this.editedItem.name,
        quantidade: this.editedItem.quantidade
      })
    }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngresso = new Ingresso(value.name , value.quantidade);
    if (this.editMode){
      this.ilService.updateIngresso(this.editedItemIndex, newIngresso);
    } else{
    this.ilService.addIngresso(newIngresso);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.ilForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.ilService.deleteIngresso(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
