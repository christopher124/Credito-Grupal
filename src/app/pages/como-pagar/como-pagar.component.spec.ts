import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoPagarComponent } from './como-pagar.component';

describe('ComoPagarComponent', () => {
  let component: ComoPagarComponent;
  let fixture: ComponentFixture<ComoPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
