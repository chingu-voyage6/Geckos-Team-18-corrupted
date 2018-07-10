import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableSearchComponent } from './expandable-search.component';

describe('ExpandableSearchComponent', () => {
  let component: ExpandableSearchComponent;
  let fixture: ComponentFixture<ExpandableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
