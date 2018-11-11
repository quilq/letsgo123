import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../store/app.reducers';
import { User } from './user.model';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select('auth')
      .pipe(
        map(authState => authState.user)
      );
  }

  onSignout() {
    this.store.dispatch(new AuthActions.On_Signout())
  }

}
