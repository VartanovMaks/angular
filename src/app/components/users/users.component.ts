import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]=[];

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient : HttpClient) {
  }
  // private httpClient : HttpClient;
  // constructor(http:HttpClient) {
  //   this.httpClient = http;
  // }

  ngOnInit(): void {
    this.httpClient.get<User[]>(this.url).subscribe( value => {
      this.users = value;
      console.log(this.users);
    });
  }

}
