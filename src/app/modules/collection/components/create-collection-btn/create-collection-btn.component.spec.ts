import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectionBtnComponent } from './create-collection-btn.component';

describe('CreateCollectionBtnComponent', () => {
  let component: CreateCollectionBtnComponent;
  let fixture: ComponentFixture<CreateCollectionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCollectionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
