import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from '../user/auth/store/auth.actions';
import { AppState } from '../store/app.reducers';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select('auth')
    .pipe(
      map(authState => authState.isAuthenticated)
      );
  }

  onSignout() {
    this.store.dispatch(new AuthActions.On_Signout())
  }
}
