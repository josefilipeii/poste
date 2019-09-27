import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {UsersService} from "../users/users.service";
import {User} from "../model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private users: Observable<User[]>;

  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.list().valueChanges();
  }

}