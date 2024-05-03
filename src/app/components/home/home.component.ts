import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { ProductsComponent } from '../products/products.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({ 
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnComponent, ProductsComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
