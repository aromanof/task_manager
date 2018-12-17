import { Injectable } from '@angular/core';
import { MembersInterface } from '../interfaces/members-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: MembersInterface = {
    name: 'Peter',
  };
  constructor() { }
}
