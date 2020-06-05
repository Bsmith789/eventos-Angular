import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { IngressosListaComponent } from './ingressos-lista/ingressos-lista.component';
import { CasaDeShowComponent } from './casa-de-show/casa-de-show.component';
import { EventosStartComponent } from './eventos/eventos-start/eventos-start.component';
import { EventosDetalhesComponent } from './eventos/eventos-detalhes/eventos-detalhes.component';
import { EventosEditComponent } from './eventos/eventos-edit/eventos-edit.component';
import { CasaDeShowStartComponent } from './casa-de-show/casa-de-show-start/casa-de-show-start.component';
import { CasaDeShowEditComponent } from './casa-de-show/casa-de-show-edit/casa-de-show-edit.component';
import { CasaDeShowDetalhesComponent } from './casa-de-show/casa-de-show-detalhes/casa-de-show-detalhes.component';
import { ClienteComponent } from './cliente/cliente.component';

const appRoutes: Routes = [
    { path: '' , redirectTo: '/eventos', pathMatch:'full'},
    {path: 'eventos', component: EventosComponent, children: [
        { path: '' , component: EventosStartComponent},
        { path: 'new', component: EventosEditComponent },
        { path: ':id', component: EventosDetalhesComponent },
        { path: ':id/edit', component: EventosEditComponent },
    ]},
    {path: 'ingressos-lista', component: IngressosListaComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'casa-de-show', component: CasaDeShowComponent, children: [
        { path: '', component: CasaDeShowStartComponent},
        { path: 'new', component: CasaDeShowEditComponent},
        { path: ':id', component: CasaDeShowDetalhesComponent},
        { path: ':id/edit', component: CasaDeShowEditComponent},
    ]},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}

