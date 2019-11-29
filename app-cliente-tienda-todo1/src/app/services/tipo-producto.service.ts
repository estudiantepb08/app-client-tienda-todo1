import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProducto } from '../models/tipo-producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  public urlEndPoint = "http://localhost:8080/api/tipoProducto";

  constructor(public http: HttpClient) { }

  getTipoProducto(): Observable<TipoProducto[]>{
    return this.http.get<TipoProducto[]>(this.urlEndPoint)
    .pipe(
     map(response => response as TipoProducto[])
    );
  }
}
