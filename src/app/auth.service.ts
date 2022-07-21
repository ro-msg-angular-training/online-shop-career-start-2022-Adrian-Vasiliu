import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(user: User) {
    return this.httpClient.post("http://localhost:3000/products/", user);
  }
}
