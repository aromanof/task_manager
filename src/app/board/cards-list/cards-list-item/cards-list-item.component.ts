import { Component, OnInit, Input } from '@angular/core';
import { CardInterface } from 'src/app/shared/interfaces/card-interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cards-list-item',
  templateUrl: './cards-list-item.component.html',
  styleUrls: ['./cards-list-item.component.sass']
})
export class CardsListItemComponent implements OnInit {
  @Input() card: CardInterface;

  @Input() tasksDragged: BehaviorSubject<any>;

  constructor() { }

  ngOnInit() {
  }

  public onDrop(event) {
    this.tasksDragged.next(event);
  }
}
