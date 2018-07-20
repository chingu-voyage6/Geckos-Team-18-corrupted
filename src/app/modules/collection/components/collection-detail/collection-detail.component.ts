import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Collection } from '../../models/collection.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CollectionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Collection,
    private collectionService: CollectionService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      public: false
    });
    this.name.setValue(this.data.name);
    this.public.setValue(this.data.public);
  }

  get name() {
    return this.editForm.get('name');
  }

  get public() {
    return this.editForm.get('public');
  }

  save() {
    this.data.name = this.name.value;
    this.data.public = this.public.value;
    this.collectionService.updateCollection(this.data).then(() => {
      this.dialogRef.close();
    });
  }
}
