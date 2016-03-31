import {Page} from 'ionic-angular';
import {MotsCouleurs} from './MotsCouleurs'
import {Choix} from './Choix'
import {Questions} from './Questions'



@Page({
  templateUrl: 'build/pages/page2/page2.html',
  directives:[Choix,MotsCouleurs,Questions],
})
export class Page2 {}
