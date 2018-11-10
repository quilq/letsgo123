import { User } from '../../user.model';
import * as AuthActions from './auth.actions';

export interface UserState {
    user: User;
    isSignedin: boolean;
    token: string;
}

let initialState: UserState = {
    user: null,
    isSignedin: false,
    token: ''
}

export function authReducer(state: UserState = initialState, action: AuthActions.Action) {
    switch (action.type) {
        case AuthActions.SIGNIN:
            return;
        case AuthActions.SIGNOUT:
            return;
        case AuthActions.SIGNUP:
            let token = action.payload.token;
            let user = action.payload.user;
            return { ...state, token, user, isSignedin: true };

        default:
            return state;
    }
}