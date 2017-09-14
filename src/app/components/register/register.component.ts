import { Component} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    //private newContact: Contact = new Contact();
    private newUser: User = new User()
    private users: any[] = [];

  constructor(private userService : AuthService) { }


  registerUser(user: User){
    this.userService.register(user) .subscribe();

  }


}
