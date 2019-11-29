import { NgModule } from '@angular/core';

import { 
MatMenuModule,
MatInputModule,
MatToolbarModule,
MatFormFieldModule ,
MatSelectModule,
MatCardModule,
MatIconModule,
MatPaginatorModule,
MatTableModule,
MatDialogModule,
MatButtonModule
 } from '@angular/material';

@NgModule({
    imports:[
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports:[
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule
    ]
})

export class MaterialModule{ }