import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User.service';
import { UserDataService } from '../../services/user-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'userlist',
  templateUrl: './UserList.page.html',
})
export class UserListPage implements OnInit {
  users: Observable<any>;
  public results = []
  public filterBy: string = '';
  public descending: boolean = false;
  public order: number;
  public column: string = 'name';
  public router: Router;

  constructor(private userService: UserService, private userDataService: UserDataService, router: Router) {
    this.router = router;
  }

  setFilterBy(event: any) {
    this.filterBy = event.target.value;
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

  delete(key: string) {
    this.userService.delete(key);
  }

  edit(user: User, key: string) {
    this.router.navigate(['/user', '']);
    this.userDataService.changeUser(user, key);
  }

  newcad() {
    this.router.navigate(['/user', '']);
  }


}
