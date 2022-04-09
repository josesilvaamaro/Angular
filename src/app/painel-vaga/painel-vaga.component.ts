import { Component, OnInit } from '@angular/core';
import { vaga } from '../models/Vaga.model';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-painel-vaga',
  templateUrl: './painel-vaga.component.html',
  styleUrls: ['./painel-vaga.component.css']
})
export class PainelVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);
  

  constructor(private _vagaService: VagaService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._vagaService.cadastrarVaga(this.vaga).subscribe(
    vaga => {this.vaga = new vaga(0,"","","",0)},
    err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";
  }

  
  atualizar(id.number){
    this._vagaService.atualizarVaga(this.vaga).subscribe(
    vaga => {this.vaga = new vaga(0,"","","",0)},
    err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";
    }

      excluir(id:number){
      this._vagaService.removerVaga(id).subscribe(
      vaga => {this.vaga = new vaga(0,"","","",0)},
      err => {console.log("erro ao excluir")}
      );
  }
}
