import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ScanPageComponent } from './scan-page/scan-page.component';
import { MaterialModule } from '../components/material.module';
import {MatButtonModule, MatIconModule} from '@angular/material';

const components = [
  ScanPageComponent
]

@NgModule({
  declarations: [...components],
    imports: [
        CommonModule,
        MaterialModule,
        DashboardRoutingModule,
        MatButtonModule,
        MatIconModule
    ],
  exports:[
    ...components
  ]
})
export class PageModule { }
