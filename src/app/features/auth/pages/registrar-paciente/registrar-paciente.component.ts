import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class RegistrarPacienteComponent {

  step = 1;
  formStep2!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formStep2 = this.fb.group({
      ingresoMensual: [''],
      nivelEstudios: [''],
      costoTratamiento: [''],
      ocupacion: [''],
      residencia: [''],
      estadoCivil: [''],
      numeroHijos: [''],
      afiliacion: ['']
    });
  }

  nextStep() {
    if (this.step === 1) {
      this.step = 2;
    }
    else if (this.step === 2) {
      this.step = 3;
    }
  }

  prevStep() {
    this.step = this.step - 1;
  }

  irARegistroLibre() {
    this.router.navigate(['/pacientes/registro-libre']);
  }
  submitAll() {
    console.log('Datos socioeconómicos enviados:', this.formStep2.value);
    alert('Predicción realizada exitosamente ✔');
    this.step = 3;

  }
}