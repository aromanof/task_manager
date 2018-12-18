import {Component, Input, OnInit} from '@angular/core';
import { CardInterface } from 'src/app/shared/interfaces/card-interface';
import * as mock from '../../shared/constants/mock-data';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {
  @Input() cards: CardInterface[];
  public activeCards: CardInterface[];

  public tasksDragged = new BehaviorSubject<any>(null);

  constructor() { }

  ngOnInit() {
    this.activeCards = this.cards;
    this.changeTasks();
  }

  public changeTasks() {
    this.tasksDragged.pipe(
      tap(res => {
        if (res) {
          console.log(res);
            const cardId = Array.from(res.container.id).pop();
            // @ts-ignore TS2538
            console.log(this.activeCards[cardId].tasks);
            this.activeCards[cardId].tasks = this.swapElements(this.activeCards[cardId].tasks, res.previousIndex, res.currentIndex);
        }
      })
    ).subscribe();
  }

  public swapElements(array: Array<any>, index1: number, index2: number): Array<any> {
      const temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;

      return array;
  }
}
