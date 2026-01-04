import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})

export class PacienteComponent {
  pacientes = [
    { id: 1, nombre: 'Ana Paola Vargas Carrera', fecha: '07/11/2025' },
    { id: 2, nombre: 'Katia Martagón Palacios', fecha: '07/11/2025' },
    { id: 3, nombre: 'Ander Arturo Luna Díaz', fecha: '07/11/2025' }
  ];
}

