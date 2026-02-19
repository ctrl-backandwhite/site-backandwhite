import { Injectable } from '@angular/core';

import { User } from 'src/app/store/Authentication/auth.models';
import { from, map, of } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;

    constructor() {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        const authUser = sessionStorage.getItem('authUser');
        return authUser ? JSON.parse(authUser) : null;
    }


    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        const authUser = sessionStorage.getItem('authUser');
        return of(authUser ? JSON.parse(authUser) : null);
    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(user: User) {
        return of(user);
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return of({ message: 'Password reset email sent' });
    }

    /**
     * Logout the user
     */
    logout() {
        // logout the user
        sessionStorage.removeItem('authUser');
    }
}

