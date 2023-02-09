import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { RegisterComponent } from './views/register/register.component';
import { ShowGameComponent } from './views/show-game/show-game.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Showgame', component: ShowGameComponent },
  { path: 'Ranking', component: RankingComponent },

  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
