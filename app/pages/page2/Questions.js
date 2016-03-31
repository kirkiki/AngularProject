/**
 * Created by ronan on 31/03/2016.
 */

import {Component} from 'angular2/core';
import {MotsCouleurs} from './MotsCouleurs';
import {Choix} from './Choix';

@Component({
    selector:`questions`,
    template:`
    <div [style.color]="color">
       {{ok}}
    </div>
    <br>
    <div class="float-left" name="bleu">
        <button (click)="isOKBlue()" >bleu</button>
    </div>
    <div class="float-right" name="rouge">
        <button (click)="isOKRed()">rouge</button>
    </div>
    <div class="float-left" name="noir">
        <button (click)="isOKBlack()">noir</button>
    </div>
    <div class="float-right" name="vert">
        <button (click)="isOKGreen()">vert</button>
    </div>
`
})
export class Questions{
    constructor(){
        this.color='blue';
        this.currentColor='blue';
        this.var='ok';
        this.ok='ok';
        this.nok='not ok';
    }
    isOKRed() {
    if(this.currentColor!='red'){
        this.color='red';
        this.currentColor='red'
        this.ok=this.var;
    }
    else
        this.ok=this.nok
    }isOKBlue() {
    if(this.currentColor!='blue') {
        this.color = 'blue'
        this.currentColor = 'blue'
        this.ok=this.var;
    }
    else
        this.ok=this.nok

}isOKBlack() {
    if(this.currentColor!='black') {
        this.color = 'black'
        this.currentColor = 'black'
        this.ok=this.var;

    }
    else
        this.ok=this.nok
    }isOKGreen() {
    if(this.currentColor!='green') {
        this.color = 'green'
        this.currentColor = 'green'
        this.ok=this.var;
    }
    else
        this.ok=this.nok
    }
}
