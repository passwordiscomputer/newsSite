import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '/Users/chasebowden/Desktop/new-site/src/models/user.model';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  constructor() { }

  getStartedClicked(userName: string, apiKey: string){
    let newUser = new User(userName, apiKey);
    this.clickSender.emit(newUser);
  }

  ngOnInit() {
  }

}
