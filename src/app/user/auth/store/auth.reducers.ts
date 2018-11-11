import { User } from '../../user.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
    user: User;
    isAuthenticated: boolean;
    token: string;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    token: ''
}

export function authReducer(state: AuthState = initialState, action: AuthActions.Action) {
    switch (action.type) {
        case AuthActions.SIGNOUT:
            return initialState;

        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
            return { ...state, user: action.payload.user, isAuthenticated: true, token: action.payload.token };

        default:
            return state;
    }
}