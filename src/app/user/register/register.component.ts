import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from 'src/app/shared/validators/register-validators';
import { EmailTaken } from 'src/app/shared/validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService,
    private emailTaken: EmailTaken
    ) { }


  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ],//asycronous validators
    [this.emailTaken.validate]
    )
  password = new FormControl('', [
    Validators.required,
    Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])

  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created';
  alertColor = 'blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,

  }, [RegisterValidators.match('password', 'confirm_password')]);


  async register() {

    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created';
    this.alertColor = 'blue';


    try {
      await this.auth.createUser(this.registerForm.value as IUser);

    } catch (e) {
      console.error({ e });
      this.alertMsg = 'Unexpected Error Registering Account.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return
    }

    this.alertMsg = 'Success! your account has been created.'
    this.alertColor = 'green'
  }
}
