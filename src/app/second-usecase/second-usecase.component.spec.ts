import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondUsecaseComponent } from './second-usecase.component';

describe('SecondUsecaseComponent', () => {
  let component: SecondUsecaseComponent;
  let fixture: ComponentFixture<SecondUsecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondUsecaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
