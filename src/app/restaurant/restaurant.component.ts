import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, Subscription } from 'rxjs';

import { Restaurant } from '../common/models';

import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'Restaurant',
    template: `
        <div
            *ngIf="activeDetail === null || activeDetail === 'none'"
            (click)="restaurantService.activeDetail.emit(restaurant.name)"
            class="col-sm-10 d-flex p-2 align-items-end bd-highlight restaurant-background-image"
            [style.background-image]="sanitizedBackgroundImageUrls">

            <div class="restaurant-image-text">
                <div class="restaurant-name">
                    {{restaurant.name}}
                </div>

                <div class="restaurant-category">
                    {{restaurant.category}}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    @Input() restaurant: Restaurant;
    @Input() activeDetail: boolean;
    @Input() isAnimationDone: boolean;

    constructor(private _sanitizer: DomSanitizer, public restaurantService: RestaurantService) {
    }

    ngOnInit() {
    }

    get sanitizedBackgroundImageUrls() {
        return this._sanitizer.bypassSecurityTrustStyle(
            `url('assets/images/cellGradientBackground@2x.png'),
             url(${this.restaurant.backgroundImageURL})`);
    }
}
