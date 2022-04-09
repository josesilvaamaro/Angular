import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vaga/mural-vaga.component';
import { PainelVagasComponent } from '../painel-vaga/painel-vaga.component';

const rotas: Routes =[
 {path:'mural-vagas', component: MuralVagasComponent },
 {path:'painel', component: PainelVagasComponent },
 {path:'', redirectTo : '/ mural', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
