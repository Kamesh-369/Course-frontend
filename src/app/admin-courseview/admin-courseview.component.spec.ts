import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseviewComponent } from './admin-courseview.component';

describe('AdminCourseviewComponent', () => {
  let component: AdminCourseviewComponent;
  let fixture: ComponentFixture<AdminCourseviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
