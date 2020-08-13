import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Post } from '@shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {
  }

  getPhotoLibrary() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
    });

    return this.http.get<Post>(`${environment.apiUrl}/library`, {
      headers
    });
  }
}
