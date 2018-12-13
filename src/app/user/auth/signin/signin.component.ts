import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authStore: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authStore.dispatch(new AuthActions.OnSignin({ email: this.signinForm.value.email, password: this.signinForm.value.password }));
  }

}
