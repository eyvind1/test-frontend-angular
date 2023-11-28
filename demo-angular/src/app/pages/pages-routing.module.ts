import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";


const PagesRoutes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update', component: UpdateProfileComponent},
];


@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
