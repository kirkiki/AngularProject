/**
 * Created by Nuniver on 25/03/2016.
 */

import {Component, Input} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';


@Component({
    selector: 'card', // Element HTML qui permettra d'utiliser le composant
    template: `
        <ion-card>
            <img [src]="card.imageUrl">
        </ion-card>
`,
    directives: [IONIC_DIRECTIVES]
})

export class Card {
    //Importation du selector dans le component
    @Input() card;
}