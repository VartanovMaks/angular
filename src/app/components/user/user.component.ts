import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user:User;
  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToDetails():void{
    // /users/:id
    console.log(this.user);

    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute});
    // this.router.navigate(['users',this.user.id], {relativeTo:this.activatedRoute});


  }
}
