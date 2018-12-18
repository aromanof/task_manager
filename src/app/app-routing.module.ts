import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CardInterface} from './shared/interfaces/card-interface';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'main', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
