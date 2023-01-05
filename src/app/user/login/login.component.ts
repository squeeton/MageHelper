import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  email = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);
  password = new FormControl('', [Validators.required]);


  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created';
  alertColor = 'blue'


  ngOnInit(): void {
  }

  async login() {

    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your are being logged in';
    this.alertColor = 'blue';


    try {
      await this.auth.signInWithEmailAndPassword(
        this.email.value as string, this.password.value as string
      );

    } catch (e) {
      console.error({ e });
      this.alertMsg = 'Unexpected Error logging in.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMsg = 'Success! you have been logged in.'
    this.alertColor = 'green'

  }


}
