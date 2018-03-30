import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  constructor() { }

  getStartedClicked(userName: string, apiKey: string){
    
  }

  ngOnInit() {
  }

}
