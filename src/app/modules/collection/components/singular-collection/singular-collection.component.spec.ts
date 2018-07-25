import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularCollectionComponent } from './singular-collection.component';

describe('SingularCollectionComponent', () => {
  let component: SingularCollectionComponent;
  let fixture: ComponentFixture<SingularCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
