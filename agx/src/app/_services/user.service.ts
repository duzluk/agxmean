import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginViewModel } from '../_models/LoginViewModel';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<LoginViewModel[]>('/api/users');
    }

    getById(id: string) {
        return this.http.get('/api/users/' + id);
    }

    create(user: LoginViewModel) {
        return this.http.post('/api/users', user);
    }

    update(user: LoginViewModel) {
        return this.http.put('/api/users/' + user._id, user);
    }

    delete(id: string) {
        return this.http.delete('/api/users/' + id);
    }
}