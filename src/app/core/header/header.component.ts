import { Component, OnInit } from '@angular/core';

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
