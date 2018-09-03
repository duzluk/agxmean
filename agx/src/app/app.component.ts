import { Component } from '@angular/core';
import {Sidenav } from './_models/sidenav';
import {AuthenticationService} from './_services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
   
  }
}
