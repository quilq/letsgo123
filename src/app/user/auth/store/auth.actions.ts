import { Action } from '@ngrx/store';
import { User } from '../../user.model';

export const ON_SIGNIN = 'ON_SIGNIN';
export const ON_SIGNUP = 'ON_SIGNUP';
export const ON_SIGNOUT = 'ON_SIGNOUT';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export class On_Signin implements Action {
    readonly type = ON_SIGNIN;
    constructor(public payload: any) { }
}

export class On_Signup implements Action {
    readonly type = ON_SIGNUP;
    constructor(public payload: any) { }
}

export class On_Signout implements Action {
    readonly type = ON_SIGNOUT;
    constructor(public payload: any) { }
}

export class Signin implements Action {
    readonly type = SIGNIN;
    constructor(public payload: any) { }
}

export class Signup implements Action {
    readonly type = SIGNUP;
    constructor(public payload: any) { }
}

export class Signout implements Action {
    readonly type = SIGNOUT;
    constructor(public payload: any) { }
}

export type Action = On_Signin | On_Signout | On_Signup | Signin | Signout | Signup;