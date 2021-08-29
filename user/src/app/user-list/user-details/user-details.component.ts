import { Component, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { UserListService } from '../user-list.service';
import { IUserDetails } from './user-details.model';
import { UserDetailsService } from './user-details.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userInfo?: User;

  detailsTitle: string = "User details: ";
  @Input() details: any;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  userDetails: IUserDetails[] = [];

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
    this.userDetails = this.userDetailsService.getUserDetails()
  }

  onClick(): void {
    console.log(`The user ${this.details} is shown.`);
    this.buttonClicked.emit(`${this.details}`);
  }

}
