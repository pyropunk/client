import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


const API_URL = environment.apiUrl;

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

   // API: POST /todos
  public createUser(user: User) {
    // will use this.http.post()
  }
}
