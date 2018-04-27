import { Component, OnInit, Input } from '@angular/core';

import { Restaurant, Contact, Location } from '../common/models';

@Component({
    selector: 'RestaurantDetail',
    template: `
        <div class="restaurant-detail-container">
            <div class="ps-0 agm">
                <agm-map
                    [latitude]="location.lat"
                    [longitude]="location.lng"
                    [zoom]="zoom">
                  <agm-marker [latitude]="location.lat" [longitude]="location.lng"></agm-marker>
                </agm-map>
            </div>

            <div class="col restaurant-detail-text">
                <div class="restaurant-name">
                    {{restaurant?.name}}
                </div>

                <div class="restaurant-category">
                    {{restaurant?.category}}
                </div>
            </div>

            <div class="col pt-0 contact-info">
                <div *ngIf="location && location.formattedAddress" class="formatted-address">
                    <div *ngFor="let formattedAddressLine of restaurant.location.formattedAddress">
                        {{formattedAddressLine}}
                    </div>
                </div>

                <div *ngIf="contact && contact.formattedPhone" class="phone-number contact-info-section">
                    {{contact.formattedPhone}}
                </div>

                <div *ngIf="contact && contact.twitter" class="twitter contact-info-section">
                    @{{contact.twitter}}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./restaurant-detail.component.css', '../restaurant/restaurant.component.css']
})
export class RestaurantDetailComponent implements OnInit {

    @Input() restaurant: Restaurant;

    zoom: number = 15;

    constructor() { }

    ngOnInit() {
    }

    get contact(): Contact { return this.restaurant.contact }
    get location(): Location { return this.restaurant.location }
}
