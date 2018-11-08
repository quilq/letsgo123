import { User } from '../../user.model';
import * as AuthActions from './auth.actions';

export interface UserState {
    user: User;
    isSignedin: boolean;
}

export function authReducer(state: UserState, action: AuthActions.Action) {
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