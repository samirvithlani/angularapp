import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CentralGovComponent } from './central-gov/central-gov.component';
import { StateGovComponent } from './central-gov/state-gov/state-gov.component';


const routes: Routes = [

  { path: "employee", component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: "userlogin", component: UserloginComponent, canActivate: [AuthGuard] },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'central-gov', component: CentralGovComponent, children: [{ path: 'state-gov', component: StateGovComponent }] },

  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'product-detail', component: ProductDetailComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
