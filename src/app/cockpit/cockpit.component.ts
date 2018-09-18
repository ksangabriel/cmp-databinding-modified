import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef, OnChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = '';
  //newServerContent = '';

  boundProp: string;

  @ViewChild('serverContentInput') srvContentInput : ElementRef;

  constructor() { 
    // console.log('CockpitComponent::constructor called');
  }

  ngOnInit() {
    // console.log('CockpitComponent::ngOnInit called');
  }

  
  ngOnChanges() {
    // console.log('CockpitComponent::ngOnChanges called');
  }

  ngDoCheck() {
    // console.log('CockpitComponent::ngDoCheck called');
  }

  ngAfterContentInit()
  {
    // console.log('CockpitComponent::ngAfterContentInit called');
  }

  // onAddServer(serverNameLocalRefValue: string) {
  //   this.serverCreated.emit({serverName:serverNameLocalRefValue, serverContent: 
  //     this.newServerContent});
  // }

  onAddServer(serverNameLocalRefValue: string) {
    this.serverCreated.emit({serverName:serverNameLocalRefValue, serverContent: 
      this.srvContentInput.nativeElement.value});
  }

  // onAddBlueprint(serverNameLocalRefValue: string) {
  //   this.blueprintCreated.emit({serverName: serverNameLocalRefValue, serverContent: 
  //     this.newServerContent});
  // }

  onAddBlueprint(serverNameLocalRefValue: string) {
    this.blueprintCreated.emit({serverName: serverNameLocalRefValue, serverContent: 
      this.srvContentInput.nativeElement.value});
  }

}
