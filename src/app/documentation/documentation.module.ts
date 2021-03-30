import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';

import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    CarouselModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
