import { Component, OnInit ,ViewChild,EventEmitter,Output, ElementRef,Renderer2,HostBinding,HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  // @ViewChild('dl') elName : ElementRef;
  @HostBinding('class') role ; 
  @Output() toggleMenubar : EventEmitter<any> = new EventEmitter()
  constructor(private renderer: Renderer2,private elName : ElementRef ) { }
  toggled :boolean = true;
  active :boolean;
  ngOnInit() {
    
  }

  togglemenu(){
      this.toggled = !this.toggled
      this.toggleMenubar.emit(); 
  }
  @HostListener('click') onClick() { 
     console.log('hi')
    }
}