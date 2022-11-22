import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoPComponent } from './aviso-p.component';

describe('AvisoPComponent', () => {
  let component: AvisoPComponent;
  let fixture: ComponentFixture<AvisoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
