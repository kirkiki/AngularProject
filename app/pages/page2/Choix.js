/**
 * Created by ronan on 31/03/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector:`choix`,
    template:`<div #bleu class="float-left" name="bleu">
        <button (click)="isOK(bleu)">bleu</button>
    </div>
    <div class="float-right" name="rouge">
        <button (click)="isOK()">rouge</button>
    </div>
    <div class="float-left" name="noir">
        <button (click)="isOK()">noir</button>
    </div>
    <div class="float-right" name="vert">
        <button (click)="isOK()">vert</button>
    </div>`
})
export class Choix{
}
