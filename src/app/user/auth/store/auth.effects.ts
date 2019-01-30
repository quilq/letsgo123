import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Router } from "@angular/router";
import { switchMap, map} from "rxjs/operators";

import { UserService } from "../../user.service";
import * as AuthActions from './auth.actions';

@Injectable()

export class AuthEffects {
    @Effect()
    authSignup$: Observable<Action> = this.action$.pipe(
        ofType(AuthActions.ON_SIGNUP),
        switchMap((action: AuthActions.OnSignup) => {
            return this.userService.signup(action.payload)
                .pipe(
                    map((response: any) => {
                        let user = { username: response.body.username, email: response.body.email };
                        if (user){
                            let token: string = response.headers.get('x-auth');
                            localStorage.setItem('token', token);
                            this.router.navigate(['/user']);
                            return new AuthActions.Signup({ user, token });
                        } else {
                            alert('Please try again !');
                        }
                    })
                )
        })
    )

    @Effect()
    authSignin$: Observable<Action> = this.action$.pipe(
        ofType(AuthActions.ON_SIGNIN),
        switchMap((action: AuthActions.OnSignin) => {
            return this.userService.signin(action.payload)
                .pipe(
                    map((response: any) => {
                        let user = { username: response.body.username, email: response.body.email };
                        if (user) {
                            let token: string = response.headers.get('x-auth');
                            localStorage.setItem('token', token);
                            this.router.navigate(['/user']);
                            console.log('sign in called');
                            return new AuthActions.Signin({ user, token });
                        }  else {
                            alert('Wrong email or password !');
                        }
                    })
                )
        })
    )

    @Effect()
    authSignout$: Observable<Action> = this.action$.pipe(
        ofType(AuthActions.ON_SIGNOUT),
        switchMap(() => {
            return this.userService.signout(localStorage.getItem('token'))
            .pipe(
                map(() => {
                    localStorage.removeItem('token');
                    this.router.navigate(['/']);
                    return new AuthActions.Signout();
                })

            )
        })
    )

    constructor(private action$: Actions,
        private userService: UserService,
        private router: Router) { }
}