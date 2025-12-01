import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // 🟢 Importar Router y RouterModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule], // 🟢 Añadir RouterModule
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  mostrarClave: boolean = false;
  mostrarClave2: boolean = false;

  constructor(private router: Router) { }

  registrarUsuario() {
    // Validar campos vacíos
    if (!this.email.trim() || !this.password.trim() || !this.confirmPassword.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Validar formato básico de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('Ingresa un correo válido');
      return;
    }

    // Validar contraseñas
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('Registro exitoso 🎉');
    this.router.navigate(['/auth/login']);
  }

  togglePassword() {
    this.mostrarClave = !this.mostrarClave;
  }

  togglePassword2() {
    this.mostrarClave2 = !this.mostrarClave2;
  }
}