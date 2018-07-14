import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Observable } from 'rxjs';
import { Collection } from '../../models/collection.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: Observable<Collection[]>;
  userCollections: Observable<string[]>;
  createForm: FormGroup;


  constructor(private collectionService: CollectionService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.collections = this.collectionService.collections;
    this.userCollections = this.collectionService.userCollections;
  }

  get name() {
    return this.createForm.get('name');
  }

  create() {
    this.collectionService.createCollection({name: this.name.value});
  }

}
