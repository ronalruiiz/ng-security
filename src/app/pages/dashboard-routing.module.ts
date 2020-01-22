import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanPageComponent } from './scan-page/scan-page.component';


const routes: Routes = [
  {path:'scan',component:ScanPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
