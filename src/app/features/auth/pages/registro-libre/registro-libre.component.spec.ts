import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLibreComponent } from './registro-libre.component';

describe('RegistroLibreComponent', () => {
  let component: RegistroLibreComponent;
  let fixture: ComponentFixture<RegistroLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroLibreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
