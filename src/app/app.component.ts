import { Component } from '@angular/core';
import { User } from '../models/user.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = null;

  addNewUser(newUser){
    this.user = newUser;
    
  }


}
