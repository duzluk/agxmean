import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { LoginViewModel } from '../_models/LoginViewModel';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginViewModel: LoginViewModel;
    loading = false;
    returnUrl: string;


    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar:MatSnackBar
) { }

    ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.loginViewModel=new LoginViewModel();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    }
    @ViewChild('loginForm') form;

    onSubmit() {
        if (this.form.valid) {
            this.login()
        }

    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.loginViewModel.username, this.loginViewModel.password)
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);//this.route.url
                },
                error => {
                    this.snackBar.open(error.error.message, '', { duration: 3000, });
                    this.loading = false;
                });
    }

}
