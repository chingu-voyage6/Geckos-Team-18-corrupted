import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Observable } from 'rxjs';
import { Collection } from '../../models/collection.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CollectionDetailComponent } from '../collection-detail/collection-detail.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: Observable<Collection[]>;
  userCollections: Observable<Collection[]>;
  createForm: FormGroup;

  constructor(
    private collectionService: CollectionService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      public: false
    });
    this.collections = this.collectionService.collections;
    this.userCollections = this.collectionService.userCollections;
  }

  get name() {
    return this.createForm.get('name');
  }

  get public() {
    return this.createForm.get('public');
  }

  create() {
    this.collectionService.createCollection({
      name: this.name.value,
      public: this.public.value
    });
  }

  collectionDetail(collection: Collection): void {
    const dialogRef = this.dialog.open(CollectionDetailComponent, {
      width: '250px',
      data: collection
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
