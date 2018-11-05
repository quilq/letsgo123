import { User } from '../../user.model';
import * as AuthActions from './auth.actions';

export interface UserState {
    readonly user: User;
}

export function authReducer(state: any, action: AuthActions.Action) {
    switch (action.type) {
        case AuthActions.SIGNIN:
            return ;
        case AuthActions.SIGNOUT:
            return ;
        case AuthActions.SIGNUP:
            return ;

        default:
            return state;
    }
}