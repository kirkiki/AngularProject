import {Page} from 'ionic-angular';
import {Hello} from './hello';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives:[Hello]
})
export class Page1 {}

