import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // 🟢 Importar Router y RouterModule

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // 🟢 Añadir RouterModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
