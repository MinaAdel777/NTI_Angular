import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: false,

  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  constructor(private _productS: ProductService) {}

  appProductForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    productImage: new FormControl(null),
  });

  // ! check if image passed or not
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.appProductForm.patchValue({ productImage: file });
    }
  }

  // ! display the details of the product
  addpro() {
    let formData = new FormData();
    formData.append('name', this.appProductForm.get('name')?.value);
    formData.append('desc', this.appProductForm.get('desc')?.value);
    formData.append('price', this.appProductForm.get('price')?.value);
    formData.append('category', this.appProductForm.get('category')?.value);
    formData.append(
      'productImage',
      this.appProductForm.get('productImage')?.value
    );
    this._productS.addProduct(formData).subscribe((data) => console.log(data));
  }
}
