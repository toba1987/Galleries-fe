import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';
import { CreateComponent } from './components/create/create.component';
import { SearchPageComponent } from './components/search/search-page/search-page.component';


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
        path: 'search/:term',
        component: SearchPageComponent

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
    {
        path: 'create',
        component: CreateComponent,
        canActivate: [ AuthGuard ],
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
