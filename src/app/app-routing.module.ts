import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'background', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'documentation', loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule) },
  { path: '', component: HomeComponent }, 
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
