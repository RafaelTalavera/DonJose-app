import { Component } from '@angular/core';
import { Cust } from './cust';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customers : Cust[] =[];

  constructor(private customerService: CustomerService){  }

  ngOnInit(){
   this.customerService.getCustomer().subscribe(
    customers => this.customers = customers
    
   );
  }

}
