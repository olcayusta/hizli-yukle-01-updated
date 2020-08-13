import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('USER')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  updateUser(user: User) {
    localStorage.setItem('USER', JSON.stringify(user));
    // this.currentUserSubject.next(user);
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, {email, password}).pipe(
      tap(user => {
        if (user.token) {
          localStorage.setItem('USER', JSON.stringify(user));
          localStorage.setItem('TOKEN', user.token);
          // this.currentUserSubject.next(user);
          this.router.navigateByUrl('/');
        }
      })
    );
  }

  register(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/auth/register`, {email, password}).pipe(
      tap(user => {
        if (user.token) {
          localStorage.setItem('USER', JSON.stringify(user));
          localStorage.setItem('TOKEN', user.token);
          this.router.navigateByUrl('/');
        }
      })
    );
  }

  signOut() {
    localStorage.removeItem('USER');
    // this.currentUserSubject.next(null);
    window.location.reload();
  }
}
