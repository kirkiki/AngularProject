import {Page} from 'ionic-angular';
import {MotsCouleurs} from './MotsCouleurs'
import {Choix} from './Choix'
import {Questions} from './Questions'
import {CardList} from './card-list';

@Page({
  templateUrl: 'build/pages/page2/page2.html',
  directives:[Choix,MotsCouleurs,CardList, Questions],
})
export class Page2 {}
