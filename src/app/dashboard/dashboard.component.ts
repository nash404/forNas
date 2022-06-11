import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
client!:any;
  //login!: String;
  name!:String;
  email!:String;
  newPassword!: String;
  oldPassword!:String;
  public active=false;
  newPassword2!: String;

  constructor(
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.gettUser().forEach(usee=>{
      usee.forEach((value:any)=>{
        if(value.login===JSON.parse(localStorage.getItem('user') || '{}').login)
        {
          this.client=value;
        }
      });
    });
  }
 //usee=JSON.parse(localStorage.getItem('user') || '{}');
  logoutUser(){
    this.authService.logout();
    window.alert('You are logged out');
    console.log("You are logged out");
    this.router.navigate(['/auth']);
    return false;
  }
  updateUserName(){
    const user={
      login:JSON.parse(localStorage.getItem('user') || '{}').login,
      name:this.name
    };
    this.authService.updateName(user).subscribe(data =>{
      if(!data.success){
        window.alert(data.msg);
      }
      else{
        window.alert("Your name has been changed");
        window.location.reload();
        //this.router.navigate(['/dashboard']);
        //this.authService.storeUser(data.token, data.user);
      }
    });
  }

  updateUserEmail(){
    const user={
      login:JSON.parse(localStorage.getItem('user') || '{}').login,
      email:this.email
    };
    this.authService.updateEmail(user).subscribe(data =>{
      if(!data.success){
        window.alert(data.msg);
      }
      else{
        window.alert("Your email has been changed");
        window.location.reload();
        //this.router.navigate(['/dashboard']);
        //this.authService.storeUser(data.token, data.user);
      }
    });
  }

  updatePasswordClick(){
    if (this.active) return;
    const user ={
      login: JSON.parse(localStorage.getItem('user') || '{}').login,
      newPassword: this.newPassword,
      oldPassword: this.oldPassword
    }
    console.log(user.newPassword)
    console.log(user.oldPassword)
    this.authService.updatePassword(user).subscribe(data => {
      if(!data.success){
        window.alert(data.msg);
      } else {
        window.alert("Your password has been changed");
      }
      window.location.reload();

    });
  }
  comparePass(){
    //this.newPassword2 = newValue;
    if(this.newPassword2===this.newPassword){
      this.active = false
    }
    else{
      this.active = true
    }
  }
}
