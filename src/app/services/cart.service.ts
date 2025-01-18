import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cartItems: any[] = []; // Array to store cart items

  // Add a product to the cart
  addToCart(product: any): void {
    this.cartItems.push({ ...product, quantity: 1 });
  }

  // Get all cart items
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Remove an item from the cart
  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }
}
