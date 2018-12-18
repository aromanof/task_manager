import { Component, OnInit } from '@angular/core';
import { MembersInterface } from '../shared/interfaces/members-interface';
import { UserService } from '../shared/services/user.service';
import * as mock from '../shared/constants/mock-data';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {CardInterface} from '../shared/interfaces/card-interface';
import {BoardInterface} from '../shared/interfaces/board-interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  public members: MembersInterface[] = mock.mockMembers;
  public activeBoard: BoardInterface;
  // should be got with API call
  public allBoards: BoardInterface[] = mock.mockBoards;
  constructor(public user: UserService,
              public route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                this.activeBoard = this.allBoards.find(board => board.id === +params.id);
                console.log(this.activeBoard);
            });
    }
}
