import { Component } from '@angular/core';
import { Supplier } from './supplier'; 
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-provider',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) {}

  ngOnInit() {
    this.supplierService.getSupplier().subscribe(
      suppliers => this.suppliers = suppliers 
    );
  }
}

