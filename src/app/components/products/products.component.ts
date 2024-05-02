import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgOptimizedImage, BtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
