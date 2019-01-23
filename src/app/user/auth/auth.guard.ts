import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.select('auth').subscribe(authState => {
      this.isAuthenticated = authState.isAuthenticated;
    });

    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
