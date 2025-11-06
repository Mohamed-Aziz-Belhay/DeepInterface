import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { ResetpassemailComponent } from './resetpassword/resetpassemail/resetpassemail.component';
import { ResetpwdComponent } from './resetpassword/resetpwd/resetpwd.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'respwdEmail',
        component: ResetpassemailComponent,
      },
      {
        path: 'respwd/:id',
        component: ResetpwdComponent,
      },
    ],
  },
];
