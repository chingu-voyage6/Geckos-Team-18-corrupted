import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionService } from '@collection/services/collection.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionGuard {
  constructor(private collectionService: CollectionService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.collectionService
      .getCollectionById(route.params.id)
      .pipe(take(1));
  }
}
