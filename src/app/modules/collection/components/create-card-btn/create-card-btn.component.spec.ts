import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardBtnComponent } from './create-card-btn.component';

describe('CreateCardBtnComponent', () => {
  let component: CreateCardBtnComponent;
  let fixture: ComponentFixture<CreateCardBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCardBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
