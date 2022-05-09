import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseFourComponent } from './use-case-four.component';

describe('UseCaseFourComponent', () => {
  let component: UseCaseFourComponent;
  let fixture: ComponentFixture<UseCaseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
