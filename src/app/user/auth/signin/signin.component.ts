import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signinForm.value, this.signinForm.value.email, this.signinForm.value.password);
    this.httpService.signin({ email: this.signinForm.value.email, password: this.signinForm.value.password }).subscribe(response => {
      localStorage.setItem('token', response.headers.get('x-auth'));
      console.log(response);
    });
  }

}
