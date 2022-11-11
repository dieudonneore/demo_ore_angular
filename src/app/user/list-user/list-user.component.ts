import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  page: number = 0;
  size: number = 5;
  sort: any='';
  users: any = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }


  getUserList(){
    this.userService.getUserList(this.page, this.size, this.sort)
      .subscribe(data => {
        console.log(data);
        this.users = data['content'];
        console.log(this.users);
      })
  }

  editUser(userSelected: any){
    console.log(userSelected)
    /* this.router.navigateByUrl('/update-user', {}); */
    this.router.navigate(['user/update-user'], {queryParams: {user: JSON.stringify(userSelected)}});
  }


}
