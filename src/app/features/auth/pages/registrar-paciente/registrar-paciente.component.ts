import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegistrarPacienteComponent {
  step = 1; // controla el paso actual
  formStep1!: FormGroup;
  formStep2!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formStep1 = this.fb.group({
      nombre: [''],
      genero: [''],
      fechaNacimiento: [''],
      telefono: [''],
      correo: ['']
    });

    this.formStep2 = this.fb.group({
      tipoSangre: [''],
      enfermedades: [''],
      contactoEmergencia: [''],
      telefonoEmergencia: ['']
    });
  }

  nextStep() {
    this.step = 2;
  }

  previousStep() {
    this.step = 1;
  }

  submitAll() {
    console.log('Datos simulados:', {
      ...this.formStep1.value,
      ...this.formStep2.value
    });
    alert('Formulario de prueba enviado ');
    this.step = 1;
  }
}