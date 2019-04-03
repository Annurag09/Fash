import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() public count;
  x:any;
  constructor() { }

  ngOnInit() {
    this.function();
  }
  function()
  {
        console.log(this.count);
  }
  myFunction() {
    this.x = document.getElementById("nav");
    if (this.x.className === "navbar") {
      this.x.className += " responsive";
    } else {
      this.x.className = "navbar";
    }
  }

}
