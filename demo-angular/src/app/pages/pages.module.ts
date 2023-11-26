import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
