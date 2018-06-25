import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTestComponent } from './layout-test.component';

describe('LayoutTestComponent', () => {
  let component: LayoutTestComponent;
  let fixture: ComponentFixture<LayoutTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
