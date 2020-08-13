import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Post } from '../models/post.model';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPost(postId: string) {
    return this.http.get<Image[]>(`${environment.apiUrl}/posts/${postId}`);
  }

  createPost(client?: string) {
    return this.http.post<Post>(`${environment.apiUrl}/posts`, { client });
  }

  requestToken() {
    return this.http.post<any>(`${environment.apiUrl}/posts`, {});
  }
}
