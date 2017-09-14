import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GalleriesComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
      SharedModule,
      AppRoutingModule,
      FormsModule,
      CustomFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
