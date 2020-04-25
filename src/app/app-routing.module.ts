import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefaultPageComponent } from './home/default-page/default-page.component';
import { GameDetailsComponent } from './home/game-details/game-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/sapient-games-arena/home',pathMatch:'full'},
  {path:'sapient-games-arena/home',component:HomeComponent,children:[
    {path:'',component:DefaultPageComponent},
    {path:'game/:title',component:GameDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
