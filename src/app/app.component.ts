import { Component } from '@angular/core';
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

  // changeTheme(event: Event, theme: string, dark: boolean) {
  //     let themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
  //     themeLink.href = 'assets/components/themes/' + theme + '/theme.css';

  //     if (dark) {
  //         if (!this.darkDemoStyle) {
  //             this.darkDemoStyle = document.createElement('style');
  //             this.darkDemoStyle.type = 'text/css';
  //             this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f; color: #dedede} .implementation > h3, .implementation > h4{ color: #dedede}';
  //             document.body.appendChild(this.darkDemoStyle);
  //         }
  //     }
  //     else if(this.darkDemoStyle) {
  //         document.body.removeChild(this.darkDemoStyle);
  //         this.darkDemoStyle = null;
  //     }
      
  //     event.preventDefault();
  // }
  
  isOverlay(){
    return false;
  }

  onLayoutClick(){
    this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive
  }

  onMenuButtonClick(event: Event) {
      this.menuActive = !this.menuActive;
      event.preventDefault();
  }

  closeNotification(event) {
    this.notification = false;
    event.preventDefault();
  }
}
