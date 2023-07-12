import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProfesorComponent } from './registrar-profesor.component';

describe('RegistrarProfesorComponent', () => {
  let component: RegistrarProfesorComponent;
  let fixture: ComponentFixture<RegistrarProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProfesorComponent]
    });
    fixture = TestBed.createComponent(RegistrarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
