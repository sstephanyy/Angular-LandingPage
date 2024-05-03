import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  providers: [
    ContactService
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm!: FormGroup; 
  loading = signal(false);

  constructor(private service: ContactService){
    this.contactForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    this.loading.set(true)
    if(this.contactForm.valid){
      this.service.sendData(this.contactForm.value.nome, this.contactForm.value.email).subscribe({
        next: () => {
          this.contactForm.reset();
        }
      })
    }
  }
}
