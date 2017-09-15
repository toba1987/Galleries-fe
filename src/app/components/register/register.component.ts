import { Component} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
    //private newContact: Contact = new Contact();
    private newUser: User = new User();
    private users: any[] = [];

  constructor(private userService : AuthService,
              private router: Router) { }


    registerUser(newUser){
        this.userService.register(newUser).subscribe((user) => {
            // redirect to login
            this.router.navigate(["./login"]);
        });

    }

}
