import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookService, InitParams, LoginOptions } from 'ngx-facebook';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  user: SocialUser;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService :UserService ,private authService: SocialAuthService,
    private fb: FacebookService

  ) {}
  ngOnInit():void {
    this.loginForm= this.formBuilder.group({
      username : [null, [Validators.required]],
      password :[null, [Validators.required]],
    })
    this.loadFacebookSdk().then(() => {
      console.log('Facebook SDK loaded successfully');
      this.signInWithFacebook();
    });
  }
  tooglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  login(loginForm: FormGroup) {
    if (loginForm.value.email !== "" && loginForm.value.password !== "") {
      this.userService.login(loginForm).subscribe(
        (response: any) => {
            this.userService.setRoles(response);
            this.userService.setId(response);
            localStorage.setItem('id', JSON.stringify(response.id));

            console.warn(response)
            // Navigate to dashboard or any other route
            //this.router.navigate(['/dashboard']);
            this.router.navigate(['verif']);
        },
        (error) => {
            // Handle error
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong email or password!'
            });
        }
    );

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You should type your email and password'
      });
    }
  }
  onSubmit(loginForm: FormGroup){
    this.login(loginForm)
  }


  loadFacebookSdk(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);

      const fbSdkScript = document.createElement('script');
      fbSdkScript.src = 'https://connect.facebook.net/en_US/sdk.js';
      fbSdkScript.onload = () => {
        // Initialize Facebook SDK after script is loaded
        const initParams: InitParams = {
          appId: '413264448075446',
          xfbml: true,
          version: 'v19.0'
        };
        this.fb.init(initParams)
          .then(() => {
            console.log('Facebook SDK initialized');
            resolve();
          })
          .catch((error) => {
            console.error('Error initializing Facebook SDK:', error);
            reject(error);
          });
      };
      document.body.appendChild(fbSdkScript);
    });
  }

  signInWithFacebook(): void {
    const loginOptions: LoginOptions = {
      scope: 'email' // Add any additional permissions you need
    };

    this.fb.login(loginOptions)
      .then((response) => {
        console.log('Facebook login successful:', response);
        // Handle the response here, e.g., call your backend to log in the user
      })
      .catch((error) => {
        console.error('Facebook login failed:', error);
        // Log the error details
        console.error(error);
      });
}
}
