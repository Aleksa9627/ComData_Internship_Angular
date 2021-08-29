import { Injectable } from "@angular/core";
import { IUserDetails } from "./user-details.model";

@Injectable({
    providedIn: 'root'
})

export class UserDetailsService{
    getUserDetails(): IUserDetails[]{
        return[
            {
                "age" : 27,
                "address" : "Street 43",
                "phone" : 365698588,
                "active" : "4 years",
                "expertField" : "Engeneering"
              },
              {
                "age" : 23,
                "address" : "Street 233",
                "phone" : 69857458,
                "active" : "2 years",
                "expertField" : "Programming"
              }
        ]
    }
}