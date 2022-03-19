import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Sign in to TeMealDB';
  user = "";
  password = "";
  hide = true;

  constructor(private userService: UserService, 
    //private messageService: MessageService 
    ) { }

  ngOnInit(): void {
  }

  login() {
    var auth = this.userService.login(this.user, this.password);
    if (!auth){
      //this.messageService.add({severity:'error', summary: 'Incorrect user or password', detail: 'Message Content'});
    }
  }

}
