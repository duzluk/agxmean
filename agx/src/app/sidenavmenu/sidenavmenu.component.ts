import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidenav } from '../_models/Sidenav';
import { AuthenticationService } from '../_services/authentication.service'
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GenericService } from '../_services';
import { LoginViewModel } from '../_models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.css'],
  providers:[GenericService,AuthenticationService]
})

export class SidenavmenuComponent implements OnInit {
  
 
  
  sidenavItems: any[]; //Menu Tanımları environment altında
  modules:string[]
  constructor(public auth:AuthenticationService,public route: Router,private userService: GenericService<LoginViewModel>) { 
    this.sidenavItems=environment.Sidenav;
    userService.url=`${environment.URLRestFullApi}/users`
    userService.getAll()
      .subscribe(response=>{
        let user=response.find(usr=>usr.username==localStorage.getItem('username'));
        if (user.Roll=="admin") return;
        this.modules=user.Authority.Modules;
        this.sidenavItems=this.sidenavItems.filter(menu=>this.modules.indexOf(menu.id)!==-1);
      })
   }

  ngOnInit(): void {  }

  logout(){
    this.auth.logout()
    this.route.navigate(['/login'])
  }
}
