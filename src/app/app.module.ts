import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService} from 'primeng/api';   
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { EmployeeComponent } from './employee/employee.component';
import { EmpComponent } from './emp/emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MenuComponent } from './menu/menu.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SalaryPipe } from './salary.pipe';
import { GenPipe } from './gen.pipe';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CentralGovComponent } from './central-gov/central-gov.component';
import { StateGovComponent } from './central-gov/state-gov/state-gov.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    EmpComponent,
    UserloginComponent,
    MenuComponent,
    AdminloginComponent,
    SalaryPipe,
    GenPipe,
    ProductDetailComponent,
    CentralGovComponent,
    StateGovComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     AccordionModule,
     BrowserAnimationsModule,
     ToastModule,
     TableModule,
     ButtonModule,
     FormsModule,
     ReactiveFormsModule
  
     
    

  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
