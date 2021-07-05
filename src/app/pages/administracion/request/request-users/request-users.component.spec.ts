import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUsersComponent } from './request-users.component';

describe('RequestUsersComponent', () => {
  let component: RequestUsersComponent;
  let fixture: ComponentFixture<RequestUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
