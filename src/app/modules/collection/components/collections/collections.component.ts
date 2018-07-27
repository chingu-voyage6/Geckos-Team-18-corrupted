import { Component, OnInit } from '@angular/core';
import { CollectionService } from '@collection/services/collection.service';
import { Observable } from 'rxjs';
import { Collection } from '@collection/models/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  userCollections: Observable<Collection[]>;
  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.userCollections = this.collectionService.userCollections;
  }
}
