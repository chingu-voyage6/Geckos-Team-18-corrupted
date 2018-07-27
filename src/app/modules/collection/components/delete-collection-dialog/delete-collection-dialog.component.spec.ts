import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCollectionDialogComponent } from './delete-collection-dialog.component';

describe('DeleteCollectionDialogComponent', () => {
  let component: DeleteCollectionDialogComponent;
  let fixture: ComponentFixture<DeleteCollectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCollectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCollectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
