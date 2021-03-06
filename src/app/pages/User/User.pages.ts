import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/User.service';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './User.pages.html',
})

export class UserPage implements OnInit {
  public user: User
  public key: string = '';
  public router: Router;

  constructor(private userService: UserService, private userDataService: UserDataService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.user = new User();
    this.userDataService.currentUser.subscribe(data => {
      if (data.user && data.key) {
        this.user = new User();

        this.user.name = data.user.name;
        this.user.age = data.user.age;
        this.user.phone = data.user.phone;
        this.user.email = data.user.email;
        this.user.iddoc = data.user.iddoc;
        this.user.address = data.user.address;
        this.user.complement = data.user.complement;
        this.user.zipcode = data.user.zipcode;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.userService.update(this.user, this.key);
    } else {
      this.userService.insert(this.user);
    }

    this.user = new User();
  }

  home() {    
    this.router.navigate(['/userlist']);
  }

}
