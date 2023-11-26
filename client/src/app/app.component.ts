
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { user } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Dating App';
  

  constructor(private accountService:AccountService) {}

  ngOnInit(): void {
  
  }
  
   
  
  setCurrentUser () {
    const userString= localStorage.getItem('user');
    if (!userString) return;
    const user: user = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }



}
