import { Component, OnInit, Input } from '@angular/core';

import { RestaurantService } from '../restaurant.service';

@Component({
    selector: 'Header',
    template: `
        <div class="container-fluid">
            <div class="row header-container">
                <div class="col back-icon-container">
                    <img (click)="restaurantService.activeDetail.emit('none')" *ngIf="activeDetail !== 'none'" class="back-icon" src="assets/images/ic_webBack@2x.png" />
                </div>

                <div class="col-6 header-text">
                    Lunch Tyme
                </div>

                <div class="col map-icon-container">
                    <img class="map-icon" src="assets/images/icon_map@2x.png" />
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() activeDetail: boolean;

    constructor(public restaurantService: RestaurantService) {}

    ngOnInit() {
    }

}
