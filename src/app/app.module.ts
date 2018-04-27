import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipModule } from 'ngx-bootstrap';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { RestaurantService } from './restaurant.service';

import { DrawerComponent } from './drawer/drawer.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        DrawerComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC1k7i-jEBkKIamWpAfHpFC0RDNnu5Od7c'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TooltipModule.forRoot()
    ],
    providers: [RestaurantService],
    bootstrap: [AppComponent]
})
export class AppModule { }
