import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userSource = new BehaviorSubject({ user: null, key: '' });
  currentUser = this.userSource.asObservable();
 
  constructorp() { }
 
  changeUser(user: User, key: string) {
    this.userSource.next({ user: user, key: key });
  }
}