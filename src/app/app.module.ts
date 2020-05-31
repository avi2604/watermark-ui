import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingComponent } from "./app.component.routingModule";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ApplicationService } from "./share/services/app.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingComponent,
    // ReactiveFormsModule,
  ],
  providers: [
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
