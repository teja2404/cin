import {Component,Input,OnInit,EventEmitter,ViewChild} from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() reset: boolean;

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
            {
                label: 'Customization', icon: 'fa fa-fw fa-bars' ,badge: '8',
                items: [
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars' },
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-bars'},
                    {label: 'Slim Menu', icon: 'fa fa-fw fa-bars'},
                    {label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars'},
                    {label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw'},
                    {label: 'Top Profile', icon: 'fa fa-moon-o fa-fw',},
                    {label: 'Light Menu', icon: 'fa fa-sun-o fa-fw',},
                    {label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw',}
                ]
            },
            {
                label: 'Layout Colors', icon: 'fa fa-fw fa-magic',
                items: [
                    {
                        label: 'Flat',
                        icon: 'fa fa-fw fa-circle',
                        items: [
                            {label: 'Blue', icon: 'fa fa-fw fa-paint-brush' },
                            {label: 'Purple', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush' },
                            {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Teal', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Pink', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Lime', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Green', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Amber', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Dark Grey', icon: 'fa fa-fw fa-paint-brush'},
                        ]
                    },
                    {
                        label: 'Special',
                        icon: 'fa fa-fw fa-fire',
                        items: [
                            {label: 'Influenza', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Suzy', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Calm', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Crimson', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Night', icon: 'fa fa-fw fa-paint-brush' },
                            {label: 'Skyling', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Sunkist', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Little Leaf', icon: 'fa fa-fw fa-paint-brush'},
                            {label: 'Joomla', icon: 'fa fa-fw fa-paint-brush', },
                            {label: 'Firewatch', icon: 'fa fa-fw fa-paint-brush'}
                        ]
                    }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: '5',
                items: [
                    {label: 'Blue', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Purple', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Teal', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Orange', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Light Blue', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Green', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Light Green', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Lime', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Amber', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Brown', icon: 'fa fa-fw fa-paint-brush'},
                    {label: 'Dark Grey', icon: 'fa fa-fw fa-paint-brush'},
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms']},
                    {label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data']},
                    {label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file']},
                    {label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc']}
                ]
            },
            {
                label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',
                items: [
                    {label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty']},
                    {label: 'Landing Page', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: 'Not Found Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/notfound.html', target: '_blank'},
                    {label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation']}
        ];
    }
}
