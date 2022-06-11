import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaintComponent } from './admin-paint.component';

describe('AdminPaintComponent', () => {
  let component: AdminPaintComponent;
  let fixture: ComponentFixture<AdminPaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
