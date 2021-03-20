import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [

  { path: '', component: DocumentationComponent },
  { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
  { path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
