import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../shared/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      logemail: new FormControl(null, Validators.required),
      logpassword: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  login() {

    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._myservice.submitRegister(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dash']);
           var currentUser = JSON.parse(localStorage.getItem('currentUser'));
           var token = data['data']['token']; // your token
            sessionStorage.setItem('token', JSON.stringify({ token: token, user: data['data']['user'] }));
            
          },
          error => { }
        );
    }
  }
  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}