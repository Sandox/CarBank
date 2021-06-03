import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ButtonComponent } from './Shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { DashItemsComponent } from './dash-items/dash-items.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    UserDetailsComponent,
    ProductItemComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ButtonComponent,
    DashItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'landing-screen', component: DashItemsComponent},
      {path: 'users', component: MainDashboardComponent},
      {path: 'product-list', component: ProductItemComponent},
      {path: '', redirectTo: '/landing-screen', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
