import { Component, OnInit } from '@angular/core';
import { MembersInterface } from '../shared/interfaces/members-interface';
import { ParseTreeResult } from '@angular/compiler';
import { UserService } from '../shared/services/user.service';
import * as mock from '../shared/constants/mock-data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  public members: MembersInterface[] = mock.mockMembers;
  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
