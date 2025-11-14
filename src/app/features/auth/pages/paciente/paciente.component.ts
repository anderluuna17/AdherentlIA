import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa esto
import { RouterModule } from '@angular/router'; // ← ⭐ IMPORTANTE

@Component({
  selector: 'app-paciente',
  standalone: true, // ✅ asegúrate de tener esto
  imports: [CommonModule, RouterModule], // ✅ agrega CommonModule
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