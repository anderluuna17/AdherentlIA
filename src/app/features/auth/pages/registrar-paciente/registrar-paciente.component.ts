import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // 🟢 Importar Router y RouterModule

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule] // 🟢 Añadir RouterModule
})
export class RegistrarPacienteComponent {

  step = 1;
  formStep2!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // 🟢 Inyección del Router
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
    // Si estamos en el paso 1, vamos al 2.
    if (this.step === 1) {
      this.step = 2;
    }
    // Si estamos en el paso 2, vamos al 3. Aquí iría la validación del formulario.
    else if (this.step === 2) {
      // ⚠️ NOTA: Aquí debes llamar a submitAll() para enviar datos y luego mostrar el paso 3.
      // Por ahora, solo pasaremos al paso 3:
      this.step = 3;
    }
  }

  prevStep() {
    this.step = this.step - 1; // Hacemos que sea flexible: 3 -> 2, 2 -> 1
  }

  irARegistroLibre() {
    this.router.navigate(['/pacientes/registro-libre']); // 🟢 Ahora ya reconocido
  }

  // 🟢 submitAll() debe ser la acción final del Paso 2
  submitAll() {
    console.log('Datos socioeconómicos enviados:', this.formStep2.value);
    alert('Predicción realizada exitosamente ✔');
    this.step = 3; // Mostrar el resultado
    // this.formStep2.reset(); // Puedes comentar o dejar el reset si quieres limpiar los datos
  }
}