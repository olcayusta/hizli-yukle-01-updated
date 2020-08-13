import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  send(content: string) {
    return this.http.post<Feedback>(`${environment.apiUrl}/feedbacks`, {content});
  }
}
