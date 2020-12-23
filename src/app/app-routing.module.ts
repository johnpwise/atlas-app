import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./members/home/home.component";
import {MemberDashboardComponent} from "./members/member-dashboard/member-dashboard.component";

const routes: Routes = [
  { path: '',
    children: []
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'members',
    component: MemberDashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
