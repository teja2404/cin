import { Component,Input } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuActive: boolean;
  resetMenu: boolean;
  staticMenuDesktopInactive: boolean = false;
  activeMenuId: string;

  notification: boolean = false;

  darkDemoStyle: HTMLStyleElement;

  ngOnInit() {
    setTimeout(()=>this.notification = true , 1000)
  }
  
  isOverlay(){
    return false;
  }

  menuToggle(){
    this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive
  }

  onMenuButtonClick(event: Event) {
      this.menuActive = !this.menuActive;
      event.preventDefault();
  }
  menuToggleResponse(){
    this.staticMenuDesktopInactive = false
  }


  closeNotification(event) {
    this.notification = false;
    event.preventDefault();
  }
}
