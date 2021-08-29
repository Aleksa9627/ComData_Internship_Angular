import { Component, OnInit } from '@angular/core';
import { IUserDetails } from './user-details/user-details.model';
import { UserListService } from './user-list.service';
import { UsersDataResponse } from './models/user-data-response';
import { User } from './models/user.model';
import { IUserTable } from './user-table-view/user-table-view.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = 'List of users: ';
  userInfoTitle: string = 'User info:';
  selectedMoreDetails?: IUserDetails;
  showDetails: boolean = false;
  errorMessage: string = '';
  users: User[] = [];

  constructor(private userListService: UserListService) {
  }

  onButtonClicked(message: string): void {
    this.selectedMoreDetails + message;
  }

  viewDetails(): void {
    this.showDetails = !this.showDetails;
    //this.userInfo = this.userInfo;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userListService.getUsers().subscribe((res: UsersDataResponse) => {
      this.users = res.data;
    }, err => {
      console.log(err);
      //dodati mat snack bar kada dodje do greske
    });
  }

}
