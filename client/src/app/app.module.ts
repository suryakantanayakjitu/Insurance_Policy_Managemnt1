import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PolicyDetailsComponent } from './Components/policy-details/policy-details.component';
import { PolicyComponent } from './Components/policy/policy.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ApplyPolicyComponent } from './Components/apply-policy/apply-policy.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { ViewAppliedPolicyComponent } from './Components/view-applied-policy/view-applied-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PolicyDetailsComponent,
    PolicyComponent,
    LoginComponent,
    DashboardComponent,
    ApplyPolicyComponent,
    UserDashboardComponent,
    ViewAppliedPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
