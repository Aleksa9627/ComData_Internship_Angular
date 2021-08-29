import { Component, ViewChild } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UsersDataResponse } from '../models/user-data-response';
import { User } from '../models/user.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'usertable',
  styleUrls: ['user-table-view.component.css'],
  templateUrl: 'user-table-view.component.html',
})
export class IUserTable {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

displayedColumns = ['name', 'email', 'gender', 'id'];
dataSource = new MatTableDataSource<User>();

constructor(private userListService: UserListService) { }

ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
  this.getUsers();
}
  private getUsers() {
  this.userListService.getUsers().subscribe((res: UsersDataResponse) => {
    this.dataSource.data = res.data;
  }, err => {
    console.log(err);
    //dodati mat snack bar kada dodje do errora
  });
}
}