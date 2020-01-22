import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table';

const components = [
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  exports:[
    ...components
  ],
  imports: [
    CommonModule,
    ...components
  ]
})
export class MaterialModule { }
