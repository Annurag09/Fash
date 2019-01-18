import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  x: any;
  title = 'Customers';
  fabarIcon = faBars;

  myFunction() {
    this.x = document.getElementById('nav');
    if (this.x.className === 'navbar') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'navbar';
    }
  }

}



