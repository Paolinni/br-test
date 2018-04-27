import { Injectable, EventEmitter } from '@angular/core';

import { Restaurant } from './common/models';

@Injectable()
export class RestaurantService {

    activeDetail: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.activeDetail.emit('none');
    }
}
