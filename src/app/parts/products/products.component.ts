import { Component, input, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private _cartService: CartService
  ) {}

  staticURL = 'http://localhost:3000/images/';
  products: any[] = [];
  filteredProducts: any[] = [];
  randomProducts: any[] = [];
  displayedProducts: any[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        // this.filterProductsByRoute();
        this.selectRandomProducts(8); //! this to display the second products in home
        this.updateDisplayedProducts();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

    this.router.events.subscribe(() => {
      this.filterProductsByRoute();
    });
  }

  updateDisplayedProducts(): void {
    const currentRoute = this.route.snapshot.url
      .map((segment) => segment.path)
      .join('/');

    //todo startswith used as we have to check route regardless of the id
    if (currentRoute.startsWith('productdetails')) {
      //! this to display the products in the single product page
      this.selectRandomProducts(4);
      this.displayedProducts = this.randomProducts;
    } else {
      this.filterProductsByRoute();
      this.displayedProducts = this.filteredProducts;
    }
  }

  // ! this for filtering products by route
  filterProductsByRoute(): void {
    const currentRoute = this.route.snapshot.url
      .map((segment) => segment.path)
      .join('/');

    if (currentRoute === 'menshop') {
      this.filteredProducts = this.products.filter(
        (product) => product.category === 'men'
      );
    } else if (currentRoute === 'womenshop') {
      this.filteredProducts = this.products.filter(
        (product) => product.category === 'women'
      );
    } else if (currentRoute === 'kidsshop') {
      this.filteredProducts = this.products.filter(
        (product) => product.category === 'kids'
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  // ! this for randomly selecting products
  selectRandomProducts(count: number): void {
    const shuffled = [...this.products].sort(() => 0.5 - Math.random());
    this.randomProducts = shuffled.slice(0, count);
  }

  // ! this for navigating when click any product
  goToProductDetails(productId: number) {
    this.router.navigate(['/productdetails', productId]);
  }

  // ! this for checking if the current page is the same as the given path
  isPage(path: string): boolean {
    return this.router.url === path;
  }

  addToCart(product: any): void {
    this._cartService.addToCart(product);
    alert(`Successfully added ${product.name} to Cart`); // Redirect to the cart page
  }

  // ! this for hidding content
  @Input() hideContent: boolean = false;
  @Input() hideContent2: boolean = false;
  @Input() showFirstArray: boolean = true;
}
