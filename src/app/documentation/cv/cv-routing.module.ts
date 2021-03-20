import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackEndComponent } from './back-end/back-end.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { CvComponent } from './cv.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { InstallationComponent } from './installation/installation.component';

const routes: Routes = [

  { path: '', component: CvComponent },
  { path: 'installation', component: InstallationComponent},
  { path: 'configuration', component: ConfigurationComponent},
  { path: 'front-end', component: FrontEndComponent},
  { path: 'back-end', component:BackEndComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
