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

  redirectUrl = ""

  constructor(private httpClient: HttpClient) {
  }

  login(uc: UserCredentials): Observable<User> {
    return this.httpClient.post<User>("http://localhost:3000/login", uc).pipe(tap
    ((user) => (this.user = user)));
  }

  isLoggedIn() {
    return this.user !== null;
  }

}
