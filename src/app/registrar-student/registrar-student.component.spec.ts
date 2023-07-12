import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarStudentComponent } from './registrar-student.component';

describe('RegistrarStudentComponent', () => {
  let component: RegistrarStudentComponent;
  let fixture: ComponentFixture<RegistrarStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarStudentComponent]
    });
    fixture = TestBed.createComponent(RegistrarStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
