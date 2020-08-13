import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LibraryService } from '@shared/services/library.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '@shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryResolverService implements Resolve<Post> {

  constructor(private libraryService: LibraryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return this.libraryService.getPhotoLibrary().pipe(
      catchError(err => {
        return EMPTY;
      })
    );
  }
}
