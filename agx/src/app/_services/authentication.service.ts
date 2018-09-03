import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { LoginViewModel } from '../_models';


@Injectable()
export class AuthenticationService {
    user:LoginViewModel;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let url = `${environment.URLRestFullApi}/authenticate`;
        return this.http.post<any>(url, { username: username, password: password })
            .map(user => {
                // login olunursa jwt bir token döndürür
                if (user && user.token) {
                    // kullanıcı adı ve token bilgilerini kullanıcının refresh işlemine tebdir olarak localStorage kullanılmalı
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('username', username);
                }

                return user;
            });
    }


    logout() {
        // logout işleminden sonra kullanıcı bilgilerini localStorage den siler
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
    }
}