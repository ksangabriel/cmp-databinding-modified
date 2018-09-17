import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') srvContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
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
