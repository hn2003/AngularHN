import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularHN';
  
}
