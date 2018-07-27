import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '@collection/models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() collection: Collection;
  @Input() actionsEnabled: boolean = true;
  constructor() {}

  ngOnInit() {}

  deleteCollection() {}
}
