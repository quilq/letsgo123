import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { AppState } from 'src/app/store/app.reducers';

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

  constructor(private authStore: Store<AppState>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = { username: this.signupForm.value.username, email: this.signupForm.value.email }
    this.authStore.dispatch(new AuthActions.On_Signup({ user, password: this.signupForm.value.password }));
  }
}
