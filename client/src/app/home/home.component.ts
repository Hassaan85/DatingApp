
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registerMode = false;
  users:any;

  constructor (){}

  ngOnInit(): void {
    // this.getUsers();
  }


  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getUsers() {
  //   this.http.get('http://localhost:5055/api/users').subscribe({
  //     next: response => this.users = response,
  //     error:error => console.log (error),
  //     complete: () => console.log('Request has been completed')
  //   })
  // }

  cancelRegisterMode (event:boolean) {
    this.registerMode=event;
  }

}
