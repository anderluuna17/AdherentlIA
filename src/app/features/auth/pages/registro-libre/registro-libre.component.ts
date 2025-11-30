import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-libre',
  templateUrl: './registro-libre.component.html',
  styleUrls: ['./registro-libre.component.css']
})
export class RegistroLibreComponent {

  // Objeto para capturar toda la información
  pacienteLibre = {
    nombre: '',
    id: '',
    fechaNacimiento: '',
    curp: '',
    ocupacion: '',
    residencia: '',
    estadoCivil: '',
    hijos: '',
    afiliacion: '',
    ingreso: '',
    costoTratamiento: ''
  };

  constructor(private router: Router) { }


  regresar() {
    this.router.navigate(['/pacientes/registrar']);
  }
}