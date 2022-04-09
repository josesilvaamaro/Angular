import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MuralVagaComponent } from './mural-vaga/mural-vaga.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PainelVagaComponent } from './painel-vaga/painel-vaga.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagaComponent,
    PainelVagaComponent,
    MenuComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   RouterModule,
   AppRoutingModule,
   FormsModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
