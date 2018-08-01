import { Component, OnInit } from '@angular/core';
import { Collection } from '@collection/models/collection.model';
import { CollectionService } from '@collection/services/collection.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  collections: Collection[];

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.collectionService
      .search(this.route.queryParams.pipe(map(term => term['q'])))
      .subscribe(collections => (this.collections = collections));
  }
}
