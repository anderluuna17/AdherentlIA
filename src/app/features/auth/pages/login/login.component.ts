import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  mostrarClave: boolean = false;

  constructor(private router: Router) { }
  togglePassword() {
    this.mostrarClave = !this.mostrarClave;
  }

  validarLogin() {
    const regexEmail = /@gmail\.com$/;
    const regexPassword = /^[A-Za-z0-9]{8,}$/;



    if (!this.email.trim()) {
      alert("Por favor, ingresa un correo");
      return;
    }

    if (!regexEmail.test(this.email)) {
      alert("El correo debe contener @gmail.com");
      return;
    }

    if (!this.password.trim()) {
      alert("Por favor, ingresa tu contraseña");
      return;
    }

    if (!regexPassword.test(this.password)) {
      alert("La contraseña debe tener mínimo 8 caracteres y solo números y/o letras");
      return;
    }

    this.router.navigate(['/home']);
  }
}