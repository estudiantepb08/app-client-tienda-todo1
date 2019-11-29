import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoDto } from '../models/producto-dto';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public urlEndPoind = "http://localhost:8080/api/producto";

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) { }

  getProductos(): Observable<ProductoDto[]>{
    return this.http.get(this.urlEndPoind)
    .pipe(
      map(response => response as ProductoDto[])
      );
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoind, producto, {headers : this.httpHeaders})
  }

  getProducto(id): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoind}/${id}`)
  }
}
