import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { UserService } from "../../user.service";
import { Action } from "@ngrx/store";
import * as AuthActions from './auth.actions';
import { switchMap, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()

export class AuthEffects {
    @Effect()
    auth$: Observable<Action> = this.action$.pipe(
        ofType(AuthActions.ON_SIGNUP),
        switchMap((action: AuthActions.On_Signup) => {
            return this.userService.signup(action.payload)
            .pipe(
                map(response => {
                    localStorage.setItem('token', response.headers.get('x-auth'));
                    this.router.navigate(['/user']);
                })
            )
        })
    )

    constructor(private action$: Actions,
        private userService: UserService,
        private router: Router) { }
}