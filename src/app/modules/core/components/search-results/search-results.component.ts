import { Component, OnInit } from '@angular/core';
import { Collection } from '@collection/models/collection.model';
import { BehaviorSubject } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

import { combineLatest, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
// export class SearchResultsComponent implements OnInit {
//   searchterm: string;

//   lastKeypress: 0;

//   startAt = new Subject();
//   endAt = new Subject();

//   collections: Collection[];
//   allCollections;

//   startobs = this.startAt.asObservable();
//   endobs = this.endAt.asObservable();

//   constructor(private afs: AngularFirestore) {}

//   ngOnInit() {
//     this.getallCollections().subscribe(collections => {
//       this.allCollections = collections;
//     });
//     // combineLatest(this.startobs, this.endobs).subscribe(value => {
//     //   this.firequery(value[0], value[1]).subscribe(collections => {
//     //     this.collections = collections;
//     //   });
//     // });
//   }

//   search($event) {
//     if ($event.timeStamp - this.lastKeypress > 200) {
//       const q = $event.target.value;
//       this.startAt.next(q);
//       this.endAt.next(q + '\uf8ff');
//     }
//     this.lastKeypress = $event.timeStamp;
//   }

//   // search($event) {
//   //   const q = $event.target.value;
//   //   if (q !== '') {
//   //     this.startAt.next(q);
//   //     this.endAt.next(q + '\uf8ff');
//   //   } else {
//   //     this.collections = this.allCollections;
//   //   }
//   // }

//   firequery(start, end) {
//     return this.afs
//       .collection<Collection>('collections', ref =>
//         ref
//           .limit(5)
//           .orderBy('name')
//           .startAt(start)
//           .endAt(end)
//       )
//       .valueChanges();
//   }

//   getallCollections() {
//     return this.afs
//       .collection('collections', ref => ref.orderBy('name'))
//       .valueChanges();
//   }
// }


export class SearchResultsComponent implements OnInit {
  searchText: string;
  lastKeypress: 0;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');

  collections: Collection[];
  allCollections;

  startobs = this.startAt.asObservable();

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.getallCollections().subscribe(collections => {
      this.allCollections = collections;
    });
  }
  search(searchText) {
    this.startAt.next(searchText);
  }

  getallCollections() {
    return this.afs
      .collection('collections', ref => ref.orderBy('name'))
      .valueChanges();
  }
}
