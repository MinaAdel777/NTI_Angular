import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-single-product',
  standalone: false,

  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent implements OnInit {
  product: any;
  staticURL = 'http://localhost:3000/images/';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId: any = params.get('id'); // get product id from URL
      this.getProduct(productId); // fetch new product details
    });
  }

  getProduct(id: number): void {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart(product: any): void {
    this._cartService.addToCart(product);
    alert(`Successfully added ${product.name} to Cart`);
  }
}
