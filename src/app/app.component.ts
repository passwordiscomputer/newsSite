import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Api } from './models/api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api = new Api();
  user = null;
  sourceUrl: string;

  addNewUser(newUser){
    this.user = newUser;
    this.sourceUrl = `https://newsapi.org/v2/sources?language=en&apiKey=${newUser.apiKey}`
    console.log(this.sourceUrl);
    this.api.callApi(this.sourceUrl)
    .then(()=>{
      console.log(this.user.userName)
    });

  }



}
