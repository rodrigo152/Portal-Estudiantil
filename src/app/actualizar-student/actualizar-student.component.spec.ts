import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ActualizarStudentComponent } from './actualizar-student.component';

describe('ActualizarStudentComponent', () => {
  let component: ActualizarStudentComponent;
  let fixture: ComponentFixture<ActualizarStudentComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ActualizarStudentComponent]
    })
    fixture = TestBed.createComponent(ActualizarStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
