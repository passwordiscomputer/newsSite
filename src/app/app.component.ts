import { Component } from '@angular/core';
import { User } from './models/user.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = null;
  sourceURL =  `https://newsapi.org/v2/sources?language=en&apiKey={{this.user.apiKey}}`
  addNewUser(newUser){
    this.user = newUser;
    callSourcesApi();
  }

  callApi(){

  }

}
