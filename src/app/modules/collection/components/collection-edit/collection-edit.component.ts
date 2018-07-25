import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  cards: Observable<Card[]>;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService
  ) {
    route.params.subscribe(params => {
      this.cards = this.collectionService.getCollectionCards(params.id);
    });
  }

  ngOnInit() {}
}
