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
  @Output() toggleshowhambergmenu : EventEmitter<any> = new EventEmitter()
  constructor(private renderer: Renderer2,private elName : ElementRef ) { }
  toggled :boolean = true;
  topbarItemsVisible :boolean = false;
  active :boolean = false;
  ngOnInit() {
    
  }

  togglemenu(){
      this.toggled = !this.toggled
      this.topbarItemsVisible = false
      this.toggleMenubar.emit(); 
  }
  toggleactive(){
    this.active = !this.active
  }

  showhambergmenu(){
    this.toggleshowhambergmenu.emit()
    this.topbarItemsVisible = !this.topbarItemsVisible
  }
}