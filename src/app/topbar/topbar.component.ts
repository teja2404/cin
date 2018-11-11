import { Component, OnInit ,ViewChild, ElementRef,AfterViewInit,Renderer2,HostListener} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @ViewChild('dl') elName : ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.renderer)
  }
  toggleactive(){
    console.log('hi')
    // this.elName.nativeElement.query
  }

}