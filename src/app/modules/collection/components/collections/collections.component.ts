import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
	
  constructor(
	private collectionService: CollectionService,
	
  	) { }

  ngOnInit() {
  }

}
