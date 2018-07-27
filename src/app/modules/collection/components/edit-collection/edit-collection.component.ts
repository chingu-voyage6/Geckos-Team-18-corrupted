import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '@collection/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Collection } from '@collection/models/collection.model';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.css']
})
export class EditCollectionComponent implements OnInit {
  editForm: FormGroup;
  collection: Collection;
  constructor(
    private editBuilder: FormBuilder,
    private collectionService: CollectionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.collection = this.route.snapshot.data.collection;
    this.editForm = this.editBuilder.group({
      name: [this.collection.name, [Validators.required]],
      public: this.collection.public
    });
  }
  save() {
    this.collection.name = this.name.value;
    this.collection.public = this.public.value;
    this.collectionService.updateCollection(this.collection).then(() => {
      this.router.navigate(['/collections']);
    });
  }

  get name() {
    return this.editForm.get('name');
  }

  get public() {
    return this.editForm.get('public');
  }
}
