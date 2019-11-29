import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { from } from 'rxjs';
import { FormComponent } from './producto/form.component';


const routes: Routes =[
  {path:'', redirectTo: '/producto', pathMatch:'full'},
  {path:'producto', component: ProductoComponent},
  {path:'tipoProducto', component: TipoProductoComponent},
  {path:'producto/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    TipoProductoComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    FormsModule    
  ],
  entryComponents:[
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
