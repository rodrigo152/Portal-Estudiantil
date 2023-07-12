import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoSocialComponent } from './apartado-social.component';

describe('ApartadoSocialComponent', () => {
  let component: ApartadoSocialComponent;
  let fixture: ComponentFixture<ApartadoSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartadoSocialComponent]
    });
    fixture = TestBed.createComponent(ApartadoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
