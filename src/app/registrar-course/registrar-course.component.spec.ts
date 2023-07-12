import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCourseComponent } from './registrar-course.component';

describe('RegistrarCourseComponent', () => {
  let component: RegistrarCourseComponent;
  let fixture: ComponentFixture<RegistrarCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCourseComponent]
    });
    fixture = TestBed.createComponent(RegistrarCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
