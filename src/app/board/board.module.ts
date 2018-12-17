import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsListItemComponent } from './cards-list/cards-list-item/cards-list-item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BoardComponent,
    CardsListComponent,
    CardsListItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    DragDropModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
