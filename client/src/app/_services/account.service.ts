import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { user } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:5055/api/';
  private currentUserSource = new BehaviorSubject<user | null>(null);
  currentUsers$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  login (model:any) {
    return this.http.post<user>(this.baseUrl + 'account/login', model).pipe (
      map((response:user)=> {
         const user = response;
         if (user) {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
         }
      })
    )
  }


  setCurrentUser(user: user) {
    this.currentUserSource.next(user);
  }

  logout () {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }



register(model: any) {
  return this.http.post<user>(this.baseUrl + 'account/register',model).pipe(
    map(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
  
    })
  )
}
    
}


