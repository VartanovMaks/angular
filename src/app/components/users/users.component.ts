import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]=[];

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( value => {
      this.users = value;
    });

  }

}
