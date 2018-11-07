import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

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

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.value.email);
    this.httpService.signup({ username: this.signupForm.value.username, email: this.signupForm.value.email, password: this.signupForm.value.password }).subscribe(response => {
      localStorage.setItem('token', response.headers.get('x-auth'));
      console.log(response);
      this.router.navigate(['/user']);
    });
  }
}
