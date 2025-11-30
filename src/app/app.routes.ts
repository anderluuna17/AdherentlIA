import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

// Páginas
import { PacienteComponent } from './features/auth/pages/paciente/paciente.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';
import { RegistrarPacienteComponent } from './features/auth/pages/registrar-paciente/registrar-paciente.component';
import { RegistroLibreComponent } from './features/auth/pages/registro-libre/registro-libre.component';
import { EditarPacienteComponent } from './features/auth/pages/editar-paciente/editar-paciente.component';
import { EditarInformacionPacienteComponent } from './features/auth/pages/editar-informacion-paciente/editar-informacion-paciente.component';
import { InicioComponent } from './features/auth/pages/inicio/inicio.component';
import { MiCuentaComponent } from './features/auth/pages/mi-cuenta/mi-cuenta.component';


export const routes: Routes = [

    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },

    // 3. RUTA DE INICIO (HOME) - Debe ser de primer nivel y usar el MainLayout
    {
        path: 'home', // 🟢 AHORA SÍ existe la ruta /home
        component: MainLayoutComponent,
        children: [
            { path: '', component: InicioComponent }
        ]
    },
    // ruta principal para mostrar pantalla pacientes
    {
        path: 'pacientes',
        component: MainLayoutComponent,
        children: [

            { path: '', component: PacienteComponent },
            { path: 'registrar', component: RegistrarPacienteComponent },
            { path: 'registro-libre', component: RegistroLibreComponent },
            { path: 'editar-paciente', component: EditarPacienteComponent },
            { path: 'info', component: EditarInformacionPacienteComponent },
            { path: 'mi-cuenta', component: MiCuentaComponent }
            //{ path: 'home', component: InicioComponent }

            // Otras rutas
            // { path: 'reportes', component: ReporteComponent },
        ]
    },



    { path: '**', redirectTo: 'auth/login' },
    { path: '**', redirectTo: 'auth/signup' },
];