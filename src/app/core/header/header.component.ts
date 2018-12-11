import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState } from '../../store/app.reducers';
import * as AuthActions from '../../user/auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select('auth')
    .pipe(
      map(authState => authState.isAuthenticated)
      );
  }


  onSignout() {
    this.store.dispatch(new AuthActions.OnSignout())
  }
  
}
