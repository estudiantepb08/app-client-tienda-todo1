import { Component, OnInit } from '@angular/core';
import { ProductoDto } from '../models/producto-dto';
import { ProductoService } from '../services/producto.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {  
  
  displayedColumns: string[] = ['id','producto', 'descripcion', 'cantidad', 'color', 'talla', 'opciones'];
  public dataSource: ProductoDto[] = [];  

  constructor(public productoService: ProductoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.productoService.getProductos()
    .subscribe(
      productos => {
        this.dataSource = productos;
        console.log(productos);
      },
      err => console.log(err)
    )
    
  }

  openDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    const dialogRef = this.dialog.open( FormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => console.log(result)
      );
  }
  
  onEdit(element){
    this.productoService.getProducto(element)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    const dialogRef = this.dialog.open( FormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => console.log(result)
      );
    console.log(element);
  }

}
