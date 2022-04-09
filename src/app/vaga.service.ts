import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { vaga } from './models/Vaga.model';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  removerVaga(id: number) {
    throw new Error('Method not implemented.');
  }

  private url = " http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) {  }

  getVagas() :Observable<Vaga[]>{
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVaga(vaga:Vaga):Observable<vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga);
 
    atualizarVaga(id:any, vaga: Vaga):Observable<vaga[]>{
      const urlAtualizar = '${this.url}/${id}';
      return this._httpClient.put<Vaga[]>(urlAtualizar, vaga);
    
      removerVaga(id:any):Observable<vaga[]>{
        const urlDeletar = '${this.url}/${id}';
        return this._httpClient.deletar<Vaga[]>(urlDeletar);
   
  }
}
