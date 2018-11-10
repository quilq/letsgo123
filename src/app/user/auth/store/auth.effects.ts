import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { UserService } from "../../user.service";
import { Action } from "@ngrx/store";
import * as AuthActions from './auth.actions';
import { switchMap, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from "../../user.model";

@Injectable()

export class AuthEffects {
    @Effect()
    auth$: Observable<Action> = this.action$.pipe(
        ofType(AuthActions.ON_SIGNUP),
        switchMap((action: AuthActions.On_Signup) => {
            return this.userService.signup(action.payload)
                .pipe(
                    map((response: any) => {
                        let user = { username: response.body.username, email: response.body.email };
                        let token: string = response.headers.get('x-auth');
                        localStorage.setItem('token', token);
                        this.router.navigate(['/user']);
                        return new AuthActions.Signup({ user, token });
                    })
                )
        })
    )

    constructor(private action$: Actions,
        private userService: UserService,
        private router: Router) { }
}