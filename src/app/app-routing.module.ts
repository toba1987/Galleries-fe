import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesComponent } from './components/galleries/galleries.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/galleries',
    pathMatch: 'full'
  },
    {
        path: 'galleries',
        component: GalleriesComponent,
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
