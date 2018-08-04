import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '@collection/models/collection.model';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() collection: Collection;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  deleteCollection() {}
}
