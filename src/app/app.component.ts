import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // tslint:disable-next-line:semicolon

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }

  // console.log(window.location.origin);
ngOnInit() {
 if (isPlatformBrowser(this.platformId)) {
      console.log(window.location.origin) ;
  }
  if (isPlatformServer(this.platformId)) {

  }
}
}
