import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

// Páginas
import { PacienteComponent } from './features/auth/pages/paciente/paciente.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';
import { RegistrarPacienteComponent } from './features/auth/pages/registrar-paciente/registrar-paciente.component';

export const routes: Routes = [
    // ✅ Ruta principal (por defecto muestra Pacientes)
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
            { path: 'pacientes', component: PacienteComponent },
            { path: 'registrar', component: RegistrarPacienteComponent },

            // Puedes agregar otras rutas aquí:
            // { path: 'reportes', component: ReporteComponent },
            // { path: 'registrar', component: RegistrarPacienteComponent },
        ]
    },

    // 🔐 Rutas de autenticación (por ahora no se usan, pero quedan preparadas)
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },

    // ⚠️ Ruta 404 (si algo no coincide)
    { path: '**', redirectTo: 'pacientes' }
];