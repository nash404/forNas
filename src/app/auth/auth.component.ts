import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login!: String;
  password!:String;
  constructor(
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  userLoginClick(){
    const user={
      login:this.login,
      password:this.password
    };
    if(user.password == undefined){
      window.alert('Enter password!');
      return false;
    }
    this.authService.authUser(user).subscribe(data =>{
      if(!data.success){
        window.alert(data.msg);
      }
      else{
        window.alert('You have successfully logged in');
        this.router.navigate(['/dashboard']);
        this.authService.storeUser(data.token, data.user);
      }
    });
    return;
  }
}
