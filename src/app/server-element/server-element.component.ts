import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterViewInit {

  @Input('srvElement') element: { type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header : ElementRef;

  constructor() { 
    console.log('ServerElementComponent::constructor called');
  }

  ngOnInit() {
    console.log('ServerElementComponent::ngOnInit called');
    console.log('xxx: ' + this.header.nativeElement.textContent);
  }

  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ServerElementComponent::ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    // console.log('ServerElementComponent::ngDoCheck called');
  }

  ngAfterContentInit()
  {
    // console.log('ServerElementComponent::ngAfterContentInit called');
  }

  ngAfterViewInit()
  {
    console.log('xxx: ' + this.header.nativeElement.textContent);
  }


}
