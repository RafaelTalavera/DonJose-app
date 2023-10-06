import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];

  constructor(private productServide: ProductService){}

  ngOnInit(){
    this.productServide.getProduct().subscribe(
    products => this.products = products

    );

  }

}
