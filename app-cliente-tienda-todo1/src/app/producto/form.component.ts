import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Producto } from '../models/producto';
import { TipoProductoService } from '../services/tipo-producto.service';
import { TipoProducto } from '../models/tipo-producto';
import { ProductoService } from '../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public tipoProductos: TipoProducto[];

  public titulo: string = "Crear Producto";

  public producto: Producto = new Producto();

  constructor(public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA)
  public data: Producto,
  public tipoProdcutoService: TipoProductoService, public productoService: ProductoService,
  public router: Router, public activatedRoute: ActivatedRoute) { }  

  ngOnInit() {
    this.tipoProdcutoService.getTipoProducto()
    .subscribe(
      tipoProducto => {
        this.tipoProductos = tipoProducto;
        console.log(tipoProducto)
      },
      err => console.log(err)
    )
  }

  onCreate(): void { 
    this.productoService.crearProducto(this.producto)
    .subscribe(
      response => {
        this.router.navigate(['/producto'])
        Swal.fire('Nuevo Producto',`El producto código #: ${this.producto.tipoProductoId}`,'success')
      }
    )      
    console.log(this.producto);
    this.dialogRef.close();
  } 

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.productoService.getProducto(id)
        .subscribe(
          (producto) => this.producto = producto
        )
      }
    })
  }

}
