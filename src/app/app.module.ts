import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaintComponent } from './paint/paint.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowComponent } from './window/window.component';

import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { PaintService } from './paint.service';

import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegComponent } from './reg/reg.component';

import { CheckFormService } from './check-form.service';
import { AuthService } from './auth.service';

import { IsLoggedIn } from './isLogged.guard';
import { FavoriteComponent } from './favorite/favorite.component';
import { ReviewsComponent } from './reviews/reviews.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalComponent } from './modal/modal.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AdminPaintComponent } from './admin-paint/admin-paint.component';
import { AdminReviewComponent } from './admin-review/admin-review.component';
//import { FlashMessagesModule} from 'flash-messages-angular';
//import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

//import { MaterialModule } from '@angular/material';

const appRoute: Routes =[
  {path:'', component: HomeComponent},
  {path:'paint', component: PaintComponent},
  {path:'contact', component: ContactComponent},
  {path:'about/:name', component: WindowComponent},
  {path:'cart', component:CartComponent},
  {path:'reg', component:RegComponent},
  {path:'auth', component:AuthComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [IsLoggedIn]},
  {path:'favorite',component:FavoriteComponent, canActivate: [IsLoggedIn]},
  {path:'reviews', component:ReviewsComponent},
  {path:'postArt', component:AdminPaintComponent},
  {path:'postReview', component:AdminReviewComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaintComponent,
    ContactComponent,
    WindowComponent,
    FooterComponent,
    WindowComponent,
    CartComponent,
    AuthComponent,
    DashboardComponent,
    RegComponent,
    FavoriteComponent,
    ReviewsComponent,
    ModalComponent,
    AdminPaintComponent,
    AdminReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
   
  ],
  providers: [
    PaintService,
    CheckFormService,
    AuthService,
    BrowserAnimationsModule,
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
