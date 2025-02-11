import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  productURL = 'http://localhost:3000/product'; // Replace with your API URL

  // Fetch products from the API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productURL);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.productURL}/${productId}`);
  }

  addProduct(product: FormData): Observable<any> {
    return this.http.post(this.productURL, product);
  }
}
