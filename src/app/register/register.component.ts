import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }
  ngOnInit() { }
  register() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      this._snackBar.open(res.message, '', {
        duration: 1000
      });
      this.signupForm.reset();
      this.router.navigate(['login']);
    });
  }
}



