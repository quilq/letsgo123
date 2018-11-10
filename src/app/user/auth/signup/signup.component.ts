import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Store } from '@ngrx/store';
import { UserState } from '../store/auth.reducers';
import { Observable } from 'rxjs';
import { User } from '../../user.model';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  isSignedin$: Observable<boolean>;

  constructor(private authStore: Store<UserState>) {
      this.isSignedin$ = this.authStore.select('isSignedin');
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = { username: this.signupForm.value.username, email: this.signupForm.value.email }
    this.authStore.dispatch(new AuthActions.On_Signup({ user, password: this.signupForm.value.password }));
  }
}
