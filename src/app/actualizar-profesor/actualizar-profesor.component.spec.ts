import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProfesorComponent } from './actualizar-profesor.component';

describe('ActualizarProfesorComponent', () => {
  let component: ActualizarProfesorComponent;
  let fixture: ComponentFixture<ActualizarProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarProfesorComponent]
    });
    fixture = TestBed.createComponent(ActualizarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
