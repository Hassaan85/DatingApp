import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { user } from '../_models/user';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {


  model: any ={};
 currentUser$:Observable<user | null> = of(null)

  constructor (public accountservice: AccountService ,private router:Router,
private toastr:ToastrService) {}

  ngOnInitt(): void {
       this.currentUser$ =this.accountservice.currentUsers$;
  }



  login () {
    this.accountservice.login(this.model).subscribe({
      next : ()=> {
        this.router.navigateByUrl('/members')
      },
      error: error => this.toastr.error(error.error)
    })
  }


  logout() {
    this.accountservice.logout();
    this.router.navigateByUrl('/');

  }

}
