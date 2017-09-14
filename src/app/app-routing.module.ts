import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/galleries',
    pathMatch: 'full',
  },
    {
        path: 'galleries',
        component: GalleriesComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ GuestGuard ],
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [ GuestGuard ],
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
