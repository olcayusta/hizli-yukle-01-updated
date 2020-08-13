import { Injectable } from '@angular/core';
import { PostService } from '@shared/services/post.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Image } from '@shared/models/image.model';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Image[]> {

  constructor(private postService: PostService, private router: Router, private location: Location) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image[]> | Promise<Image[]> | Image[] {
    // TODO - Refactor edilecek.
    if (window.history.state.progress) {
      return EMPTY;
    }
    return this.postService.getPost(route.paramMap.get('id')).pipe(
      catchError(err => {
        this.router.navigate(['/404'], {
          skipLocationChange: true
        }).then(() => {
          this.location.replaceState(state.url);
        });
        return EMPTY;
      })
    );
  }

}

