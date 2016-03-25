/**
 * Created by ronan on 25/03/2016.
 */
import {Component} from 'angular2/core';
import {NavController} from 'ionic-angular';
import {Page2} from '../page2/page2';
@Component({
    selector: `play`,
    template: `<button (click)="goToPage2()">Play</button>`
})
export class Play {
    static get parameters(){
        return [[NavController]]
    }
    constructor(nav) {
        this.nav = nav
    }

    goToPage2() {
        this.nav.push(Page2)
    }
}
