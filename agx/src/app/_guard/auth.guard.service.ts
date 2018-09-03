import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EnumsMock } from '../_services';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private enums:EnumsMock) {



    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // console.log(this.enums.user);
            // console.log(route);
            // logged in so return true
            let roll = JSON.parse(currentUser).roll.toString();
            let roles = route.data["roles"] as Array<string>;
            if (roles)
                if (roles.indexOf(roll) !== -1)
                    return true;
                else
                {
                    return false;//this.router.navigate(['']);
                }
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

