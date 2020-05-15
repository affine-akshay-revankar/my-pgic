import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLoggedin(model){

    if( model?.username && model?.password && model.username == 'admin' && model.password == 'admin@affine' ) {
      sessionStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/intro']);
    } else {
      alert("Invalid username & password!");
    }

  }

}
