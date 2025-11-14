import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

// Páginas
import { PacienteComponent } from './features/auth/pages/paciente/paciente.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';
import { RegistrarPacienteComponent } from './features/auth/pages/registrar-paciente/registrar-paciente.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'pacientes', pathMatch: 'full' },

            {
                path: 'pacientes',
                children: [
                    { path: '', component: PacienteComponent },
                    { path: 'registrar', component: RegistrarPacienteComponent }
                ]
            },

            // Otras rutas
            // { path: 'reportes', component: ReporteComponent },
        ]
    },

    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },

    { path: '**', redirectTo: 'pacientes' }
];