import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWhatsComponent } from './form-whats.component';

describe('FormWhatsComponent', () => {
  let component: FormWhatsComponent;
  let fixture: ComponentFixture<FormWhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWhatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
