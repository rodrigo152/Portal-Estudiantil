import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCourseComponent } from './actualizar-course.component';

describe('ActualizarCourseComponent', () => {
  let component: ActualizarCourseComponent;
  let fixture: ComponentFixture<ActualizarCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCourseComponent]
    });
    fixture = TestBed.createComponent(ActualizarCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
