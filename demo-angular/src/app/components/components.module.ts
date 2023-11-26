import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    SidebarComponent,
    LayoutComponent
  ],
  exports: [

    SidebarComponent,

  ]
})
export class ComponentsModule { }
