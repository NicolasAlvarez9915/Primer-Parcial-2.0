import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './Apoyo/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './Apoyo/consulta/consulta.component';

const routes: Routes = [
  { path: 'Registro', component: RegistroComponent },
  { path: 'Consulta', component: ConsultaComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
