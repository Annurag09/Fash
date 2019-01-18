import { Component, OnInit, Input } from '@angular/core';
import { Popup } from '../shared/popup';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input()  public showMessage: any;
  @Input()  public openClass: any;
 // @Input() public button: any;
  constructor() { }
  ngOnInit() {
  }
  }


