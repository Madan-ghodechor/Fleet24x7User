import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  exports: [
    ContentComponent
  ]
})
export class PagesModule { }
