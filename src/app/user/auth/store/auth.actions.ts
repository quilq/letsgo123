import { Action } from '@ngrx/store';
import { User } from '../../user.model';

export const ON_SIGNIN = 'ON_SIGNIN';
export const ON_SIGNUP = 'ON_SIGNUP';
export const ON_SIGNOUT = 'ON_SIGNOUT';
//Check auth status (local storage)

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export class OnSignup implements Action {
    readonly type = ON_SIGNUP;
    constructor(public payload: {user: User, password: string}) { }
}

export class Signup implements Action {
    readonly type = SIGNUP;
    constructor(public payload: {user: User, token: string}) { }
}

export class OnSignout implements Action {
    readonly type = ON_SIGNOUT;
    constructor() { }
}

export class Signout implements Action {
    readonly type = SIGNOUT;
    constructor() { }
}

export class OnSignin implements Action {
    readonly type = ON_SIGNIN;
    constructor(public payload: {email: string, password: string}) { }
}

export class Signin implements Action {
    readonly type = SIGNIN;
    constructor(public payload: {user: User, token: string}) { }
}

export type Action = OnSignin | OnSignout | OnSignup | Signin | Signout | Signup;