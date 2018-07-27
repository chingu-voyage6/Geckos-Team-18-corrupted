import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '@collection/models/collection.model';
import { MatDialog } from '@angular/material';
import { DeleteCollectionDialogComponent } from '@collection/components/delete-collection-dialog/delete-collection-dialog.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() collection: Collection;
  @Input() actionsEnabled: boolean = true;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  deleteCollection() {
    this.dialog.open(DeleteCollectionDialogComponent, {
      width: '250px',
      data: this.collection
    });
  }
}
