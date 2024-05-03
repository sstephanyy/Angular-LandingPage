import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input("btn-text") btnText: string = '';
  @Input() withBg: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Input() loading: boolean = false;
  @Output() disabled: boolean = false;

  submit(){
    this.onSubmit.emit();
  }
}
