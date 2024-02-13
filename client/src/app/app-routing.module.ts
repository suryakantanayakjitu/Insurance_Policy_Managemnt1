import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"userDashboard", component:UserDashboardComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  // {path:"", component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


