import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from '@collection/models/collection.model';


@Component({
  selector: 'app-view-collection',
  templateUrl: './view-collection.component.html',
  styleUrls: ['./view-collection.component.css']
})
export class ViewCollectionComponent implements OnInit {
  collection: Collection;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.collection = this.route.snapshot.data.collection;
    this.collection.cards = this.route.snapshot.data.cards;
  }
}
