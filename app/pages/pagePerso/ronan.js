import {IONIC_DIRECTIVES} from 'ionic-angular'
import {Card} from './card'
import {Component} from 'angular2/core'

@Component({
    selector: 'card-list',
    template: `
        <div>{{question}}</div>
        <div class="point">{{point}}</div>
        <button (click)="isOkCercleBleu()"><img src="Images/cercle-bleu.png"></button>
        <button (click)="IsOkCercleRose"><img src="Images/cercle-rose.png"></button>
        <button (click)="IsOkTrefleVert"><img src="Images/trefle-vert.png"></button>
        <button (click)="IsOkTriangleYellow"><img src="Images/triangle-jaune.png"></button>
        <button (click)="IsOkOneRed()"><img src="Images/1-rouge.png"></button>
        <button (click)="IsOkSevenBlack"><img src="Images/7-noir.png"></button>
        <button (click)="isOkAViolet()"><img src="Images/a-violet.png"></button>
        <button (click)="isOkSquareYellow()"><img src="Images/carre-orange.png"></button>
    `,
    directives: [IONIC_DIRECTIVES, Card]
})


export class CardList {
    constructor() {

        this.question = 'bleu';
        this.point = 0;
    }

    random() {
        var i = Math.floor(Math.random() * 13);
        var tab = ['bleu', 'rose', 'vert', 'trefle', 'triangle', 'jaune', 'rouge', 'un', '7', 'noir', 'a', 'violet', 'carre', 'orange'];
        return tab[i];
    }

    isOkCercleBleu() {
        if (this.question == 'bleu' || this.question == 'cercle') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }

    IsOkCercleRose() {
        if (this.question == 'cercle' || this.question == 'rose') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }

    IsOkTrefleVert() {
        if (this.question == 'trefle' || this.question == 'vert') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }

    IsOkTriangleYellow() {
        if (this.question == 'triangle' || this.question == 'jaune') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }
    IsOkOneRed() {
        if (this.question == 'un' || this.question == 'rouge') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }
    IsOkSevenBlack() {
        if (this.question == '7' || this.question == 'noir') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }
    isOkAViolet() {
        if (this.question == 'a' || this.question == 'violet') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }
    isOkSquareYellow() {

        if (this.question == 'carre' || this.question == 'jaune') {
            this.point += 5;
            this.question = this.random();
        }
        else
            this.question = this.random();
    }
}
