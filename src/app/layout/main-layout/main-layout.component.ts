import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importa esto
import { CommonModule } from '@angular/common'; // ✅ Recomendado

@Component({
    selector: 'app-main-layout',
    standalone: true, // ✅ importante
    imports: [RouterModule, CommonModule], // ✅ agrega ambos
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
    submenuOpen = false;

    toggleSubmenu() {
        this.submenuOpen = !this.submenuOpen;
    }
}