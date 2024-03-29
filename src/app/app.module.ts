import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { Authguard } from './_Auth/auth.guard';
import { AuthInterceptor } from './_Auth/auth.interceptor';
import { UserAuthService } from './_Services/user-auth.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgToastModule } from 'ng-angular-popup';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TeamComponent } from './team/team.component';
import { RequirementComponent } from './requirement/requirement.component';
import { StagesListComponent } from './stages-list/stages-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ForbiddenComponent,
    ProjectsListComponent,
    TeamComponent,
    RequirementComponent,
    StagesListComponent,
    TasksListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    CommonModule,
    NgxPaginationModule


  ],
  providers: [
    provideClientHydration(),
    Authguard, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserAuthService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
