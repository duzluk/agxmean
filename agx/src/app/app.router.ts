import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { LoginLayoutComponent } from './login/login-layout.component';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavmenuComponent } from './sidenavmenu/sidenavmenu.component';
import { MenuItemComponent } from './sidenavmenu/menu-item/menu-item.component';

import { PersonComponent } from './person/person.component'
import { GrowerComponent } from './grower/grower.component';
import { SeedCardComponent } from './seed.card/seed.card.component'

import { ObservationDefinitionComponent } from './observation.definition/observation.definition.component';

import { AuthGuard } from "./_guard/auth.guard.service";
import { SeedTrialComponent } from "./seed.trial/seed.trial.component";
import { SeedInputComponent } from "./seed.input/seed.input.component";
import { UserComponent } from './user/user.component';
import { SeedObservationComponent } from './seed.observation/seed.observation.component'
import { ObservationComponent } from './observation/observation.component';
import { CompetitorComponent } from "./competitor/competitor.component";
import { PmpComponent } from "./pmp/pmp.component";

const routes: Routes = [
  {
    path: '',
    component: SidenavmenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "10" }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "10" }

      },
      {
        path: 'seed.card',
        component: SeedCardComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "1" }
      },
      {
        path: 'person',
        component: PersonComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "2" }
      },
      {
        path: 'grow',
        component: GrowerComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "3" }
      },
      {
        path: 'seed.input',
        component: SeedInputComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "4" }
      },
      {
        path: 'seed.trial',
        component: SeedTrialComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "11" }
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin'], modules: "52" }
      },
      {
        path: 'observationDefinition',
        component: ObservationDefinitionComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin'], modules: "54" }
      },
      {
        path: 'seedObservation',
        component: SeedObservationComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: "7" }
      },
      {
        path: 'observation',
        component: ObservationComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: '6' }
      },
      {
        path: 'competitor',
        component: CompetitorComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: '9' }
      },
      {
        path: 'productmarketprofile',
        component: PmpComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admin', 'user'], modules: '6' }
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
  /*,
  { path: '**', redirectTo: '' }
  */
];


export const routedComponents =
  [
    LoginComponent,
    LoginLayoutComponent,
    SidenavmenuComponent,
    MenuItemComponent,
    DashboardComponent,
    PersonComponent,
    GrowerComponent,
    SeedTrialComponent,
    SeedCardComponent,
    SeedInputComponent,
    UserComponent,
    ObservationDefinitionComponent,
    SeedObservationComponent,
    ObservationComponent,
    CompetitorComponent,
    PmpComponent
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
