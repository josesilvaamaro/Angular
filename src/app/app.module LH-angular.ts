import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vaga/mural-vaga.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent
  ],
  imports: [
    BrowserModule
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
