import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  user: User | undefined;
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  errorLogin:any;

  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {}

  onSubmit(){
    ///console.log(this.loginForm.value);

    this.http.post<User>('https://test1.quadra-informatique.fr/api/auth/login', this.loginForm.value).subscribe(
      response =>{
        localStorage.setItem('User-name',response.user.name)
        localStorage.setItem('User-id',String(response.user.id))
        localStorage.setItem('User-token',response.token)

        this.router.navigate(['/list'])
      },
      error => this.errorLogin = error
    );
  }

}
