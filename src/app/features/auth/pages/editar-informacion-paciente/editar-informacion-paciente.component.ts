import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-informacion-paciente.component.html',
  styleUrls: ['./editar-informacion-paciente.component.css'],
})

export class EditarInformacionPacienteComponent {

}
