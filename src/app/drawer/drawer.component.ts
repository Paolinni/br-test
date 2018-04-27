import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'DrawerComponent',
    template: `
    <div
        class="col-sm-10 drawer-container"
        [@flyInOut]="'in'">

        <ng-content></ng-content>
    </div>
    `,
    styleUrls: ['./drawer.component.css', '../restaurant/restaurant.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateX(-100%)'}))
            ])
        ])
    ]
})
export class DrawerComponent {

    constructor() {
    }
}
