import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Collection } from '@collection/models/collection.model';
import { CollectionService } from '@collection/services/collection.service';

@Component({
  selector: 'app-delete-collection-dialog',
  templateUrl: './delete-collection-dialog.component.html',
  styleUrls: ['./delete-collection-dialog.component.css']
})
export class DeleteCollectionDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteCollectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Collection,
    private collectionService: CollectionService
  ) {}

  ngOnInit() {}

  delete() {
    this.collectionService.deleteCollection(this.data.id).then(() => {
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
