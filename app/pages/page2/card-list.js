import {IONIC_DIRECTIVES} from 'ionic-angular'
import {Card} from './card'
import {Component} from 'angular2/core'

@Component({
    selector : 'card-list',
    template : `
        <card *ngFor="#card of cards" [card]="card"></card>
    `,
    directives : [IONIC_DIRECTIVES, Card]
})
/*export class CardList1 {
    constwructor() {
        this.cards = [
            {imageUrl: 'Images/1-rouge.png'},
            {imageUrl: 'Images/7-noir.png'},
            {imageUrl: 'Images/a-violet.png'},
            {imageUrl: 'Images/carre-orange.png'}
        ]
    }
}*/

export class CardList {
    constructor() {
        this.cards = [
            {imageUrl: 'Images/cercle-bleu.png'},
            {imageUrl: 'Images/cercle-rose.png'},
            {imageUrl: 'Images/trefle-vert.png'},
            {imageUrl: 'Images/triangle-jaune.png'},
            {imageUrl: 'Images/1-rouge.png'},
            {imageUrl: 'Images/7-noir.png'},
            {imageUrl: 'Images/a-violet.png'},
            {imageUrl: 'Images/carre-orange.png'}
        ]
    }
}
