import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa esto
import { Router, RouterModule } from '@angular/router'; // ← ⭐ IMPORTANTE
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  standalone: true, // ✅ asegúrate de tener esto
  imports: [CommonModule, RouterModule, ReactiveFormsModule], // ✅ agrega CommonModule
  templateUrl: './editar-informacion-paciente.component.html',
  styleUrls: ['./editar-informacion-paciente.component.css'],
})

export class EditarInformacionPacienteComponent {

}
