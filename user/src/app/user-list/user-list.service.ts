import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersDataResponse } from "./models/user-data-response";

@Injectable({
    providedIn: 'root'
})

export class UserListService {
    private userUrl = 'https://gorest.co.in/public/v1/';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<UsersDataResponse> {
        return this.http.get<UsersDataResponse>(this.userUrl + 'users');
    }
}