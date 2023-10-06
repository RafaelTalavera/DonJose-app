import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { EmployeeComponent } from './employee/employee.component';
import { SaleComponent } from './sale/sale.component';
import { BuyComponent } from './buy/buy.component';
import { BranchComponent } from './branch/branch.component';
import { CustomerService } from './customer/customer.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: 'provider', component: ProviderComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'buy',      component: BuyComponent},
  {path: 'sale',     component: SaleComponent},
  {path: 'branch',   component: BranchComponent},
  {path: 'product',   component: ProductComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomerComponent,
    ProductComponent,
    ProviderComponent,
    EmployeeComponent,
    SaleComponent,
    BuyComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
