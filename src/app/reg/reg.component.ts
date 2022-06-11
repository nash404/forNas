import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CheckFormService } from '../check-form.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name!: String;
  email!:String;
  login!:String;
  password!:String;
  /*inputTag = document.getElementById('name') as HTMLInputElement;
  inputTag1 = document.getElementById('email') as HTMLInputElement;
  inputTag2 = document.getElementById('login') as HTMLInputElement;
  inputTag3 = document.getElementById('password') as HTMLInputElement;*/


  constructor(
    private router:Router,
    private authService: AuthService,
    private checkForm: CheckFormService
    ) { }

  ngOnInit(): void {
  }
  
  userRegisterClick(){
    const user ={
      name:this.name,
      email:this.email,
      login:this.login,
      password:this.password
    };
  
    if(!this.checkForm.checkName(user.name)){
      window.alert('Username not entered');
      console.log("Ім'я користувача не введено");
    }
    else if(!this.checkForm.checkEmail(user.email)){
      window.alert('Email not entered');
      console.log("Email користувача не введено");
    } 
    else if(!this.checkForm.checkLogin(user.login)){
      window.alert('Login not entered');
      console.log("Логін користувача не введено");
    } 
    else if(!this.checkForm.checkPassword(user.password)){
      window.alert('Password not entered');
      console.log("Пароль користувача не введено");
      //return false;
    } //else return true;


  this.authService.registerUser(user).subscribe(data =>{
    if(!data.success){
      window.alert(data.msg);
      this.router.navigate(['/reg']);
    }else{
      window.alert(data.msg);
      this.router.navigate(['/auth']);
    }

  });
  return;
}
}
