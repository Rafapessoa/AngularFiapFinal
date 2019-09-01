import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/User';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private db: AngularFireDatabase) { }
 
  insert(user: User) {
    this.db.list('user').push(user)
      .then((result: any) => {
      });
  }
 
  update(user: User, key: string) {
    this.db.list('user').update(key, user)
      .catch((error: any) => {
      });
  }
 
  getAll() {
    return this.db.list('user')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }
 
  delete(key: string) {
    this.db.object(`user/${key}`).remove();
  }
}
