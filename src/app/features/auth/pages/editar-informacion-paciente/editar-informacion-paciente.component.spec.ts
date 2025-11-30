import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformacionPacienteComponent } from './editar-informacion-paciente.component';

describe('EditarInformacionPacienteComponent', () => {
  let component: EditarInformacionPacienteComponent;
  let fixture: ComponentFixture<EditarInformacionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInformacionPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInformacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
