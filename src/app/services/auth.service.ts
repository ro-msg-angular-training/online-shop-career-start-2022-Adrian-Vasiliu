import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCredentials} from "../interfaces/UserCredentials";
import {User} from "../interfaces/User";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User | null = null;

  constructor(private httpClient: HttpClient) {
  }

  isLoggedIn() {
    return this.user !== null;
  }

  getUserRoles() {
    if (this.user == null)
      return ''
    return this.user.roles ?? '';
  }

  getUsername() {
    if (this.user == null)
      return ''
    return this.user.username ?? '';
  }

  login(uc: UserCredentials): Observable<User> {
    return this.httpClient.post<User>("http://localhost:3000/login", uc).pipe(tap
    ((user) => (this.user = user)));
  }

}
