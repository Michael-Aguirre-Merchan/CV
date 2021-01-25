import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'play', component: PlayComponent},
  {path: 'about', component: AboutComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
