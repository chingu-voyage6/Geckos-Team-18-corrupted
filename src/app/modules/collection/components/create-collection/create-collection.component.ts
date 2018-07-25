import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Collection } from '../../models/collection.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
	createForm: FormGroup;
  constructor(
  	public dialogRef: MatDialogRef<CreateCollectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Collection,
    private collectionService: CollectionService,
    private fb: FormBuilder
  	) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      public: false
    });
    this.name.setValue(this.data.name);
    this.public.setValue(this.data.public);
  }

  get name() {
    return this.createForm.get('name');
  }

  get public() {
    return this.createForm.get('public');
  }

  createCollection() {
    this.data.name = this.name.value;
    this.data.public = this.public.value;
    this.collectionService.createCollection(this.data).then(() => {
      this.dialogRef.close();
    });
  }
}
