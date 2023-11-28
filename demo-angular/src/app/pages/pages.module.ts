import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    UpdateProfileComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    DialogModule
  ]
})
export class PagesModule { }
