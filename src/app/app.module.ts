import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventosListaComponent } from './eventos/eventos-lista/eventos-lista.component';
import { EventosDetalhesComponent } from './eventos/eventos-detalhes/eventos-detalhes.component';
import { IngressosListaComponent } from './ingressos-lista/ingressos-lista.component';
import { IngressosEditComponent } from './ingressos-lista/ingressos-edit/ingressos-edit.component';
import { CasaDeShowComponent } from './casa-de-show/casa-de-show.component';
import { CasaDeShowListaComponent } from './casa-de-show/casa-de-show-lista/casa-de-show-lista.component';
import { CasaDeShowDetalhesComponent } from './casa-de-show/casa-de-show-detalhes/casa-de-show-detalhes.component';
import { EventosItemComponent } from './eventos/eventos-lista/eventos-item/eventos-item.component';
import { CasaDeShowItemComponent } from './casa-de-show/casa-de-show-lista/casa-de-show-item/casa-de-show-item.component';
import { IngressoListaService } from './ingressos-lista/ingressos-lista.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { EventosStartComponent } from './eventos/eventos-start/eventos-start.component';
import { EventosEditComponent } from './eventos/eventos-edit/eventos-edit.component';
import { EventoService } from './eventos/eventos.service';
import { ClienteComponent } from './cliente/cliente.component';
import { CasaDeShowEditComponent } from './casa-de-show/casa-de-show-edit/casa-de-show-edit.component';
import { CasaDeShowStartComponent } from './casa-de-show/casa-de-show-start/casa-de-show-start.component';
import { CasaShowService } from './casa-de-show/casa-de-show.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventosComponent,
    EventosListaComponent,
    EventosDetalhesComponent,
    IngressosListaComponent,
    IngressosEditComponent,
    CasaDeShowComponent,
    CasaDeShowListaComponent,
    CasaDeShowDetalhesComponent,
    EventosItemComponent,
    CasaDeShowItemComponent,
    DropdownDirective,
    EventosStartComponent,
    EventosEditComponent,
    ClienteComponent,
    CasaDeShowEditComponent,
    CasaDeShowStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IngressoListaService, EventoService, CasaShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
