import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { InstallationComponent } from './installation/installation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';


@NgModule({
  declarations: [CvComponent, InstallationComponent, ConfigurationComponent, FrontEndComponent, BackEndComponent],
  imports: [
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule { }
