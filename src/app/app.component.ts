import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';

import { Observable, Subscription } from 'rxjs';

import { Restaurant, RestaurantResponse } from './common/models';

import { RestaurantService } from './restaurant.service';

@Component({
    selector: 'app-root',
    template: `
        <Header
            [activeDetail]="activeDetail$ | async">
        </Header>

        <div *ngFor="let restaurant of restaurants">
            <Restaurant
                class="row mx-auto justify-content-center restaurant-container"
                [activeDetail]="activeDetail$ | async"
                [restaurant]="restaurant">
            </Restaurant>

            <DrawerComponent
                *ngIf="(activeDetail$ | async) === restaurant.name"
                class="row mx-auto justify-content-center">

                <RestaurantDetail
                    [restaurant]="restaurant">
                </RestaurantDetail>
            </DrawerComponent>
        </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _restaurants: Restaurant[];

    activeDetail$: Observable<string>;

    constructor(public apiService: HttpClient, public restaurantService: RestaurantService) {
    }

    ngOnInit() {
        this.loadRestaurants();
        this.activeDetail$ = this.restaurantService.activeDetail;
    }

    loadRestaurants() {
        this.apiService.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
            .subscribe((data: RestaurantResponse) => {
                this._restaurants = data.restaurants;
            });
    }

    get restaurants(): Restaurant[] { return this._restaurants }
}
