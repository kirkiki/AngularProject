import {IONIC_DIRECTIVES} from 'ionic-angular'
import {Card} from './card'
import {Component} from 'angular2/core'

@Component({
    selector : 'card-list',
    template : `
        <card *ngFor="#card of cards" [card]="card"></card >
    `,
    directives : [IONIC_DIRECTIVES, Card]
})

export class CardList {
    constructor() {
        this.cards = [
        {
            imageUrl: 'Images/cercle-bleu.png',
            title: 'bleu'
        },
        {
            imageUrl: 'Images/cercle-rose.png',
                title:'rose'
        },
        {
            imageUrl: 'Images/trefle-vert.png',
            title:'vert'
        },
        {
            imageUrl: 'Images/triangle-jaune.png',
            title:'jaune'
        },
        {
            imageUrl: 'Images/1-rouge.png',
            title: 'rouge'
        },
        {
            imageUrl: 'Images/7-noir.png',
            title: 'noir'
        },
        {
            imageUrl: 'Images/a-violet.png',
            title: 'violet'
        },
        {
            imageUrl: 'Images/carre-orange.png',
            title: 'orange'
        }
    ]
}
}
