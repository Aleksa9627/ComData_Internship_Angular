import { PaginationModel } from "./pagintaion.model";
import { User } from "./user.model";

export interface UsersDataResponse{
  data : User[];
  meta: {
    pagination : PaginationModel
  }
}