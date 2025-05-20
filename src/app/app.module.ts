import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryThumbnailComponent } from './components/landing/category-thumbnail/category-thumbnail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/users/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { FormNavComponent } from './components/shared/form-nav/form-nav.component';
import { RegisterFormComponent } from './components/shared/forms/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/users/login/login.component';
import { LoginFormComponent } from './components/shared/forms/login-form/login-form.component';
import { DashboardComponent } from './components/features/dashboard/dashboard.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';
import { LeftSidebarComponent } from './components/features/dashboard/left-sidebar/left-sidebar.component';
import { SummaryComponent } from './components/features/dashboard/summary/summary.component';
import { CategoriesComponent } from './components/features/dashboard/categories/categories.component';
import { ProductsComponent } from './components/features/dashboard/products/products.component';
import { OrdersComponent } from './components/features/dashboard/orders/orders.component';
import { ContentComponent } from './components/features/dashboard/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CategoryThumbnailComponent,
    RegisterComponent,
    FormNavComponent,
    RegisterFormComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    LeftSidebarComponent,
    SummaryComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
