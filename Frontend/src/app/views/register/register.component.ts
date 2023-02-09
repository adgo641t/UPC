import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(/*public usersService: RegisteredUsersService*/) { }

  registerform = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)

    ]),
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")

    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)

    ]),
    rpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)

    ])

  })
  ngOnInit(): void { //CAMBIA LAS VARIABLES PARA CUANDO INICIA LA APP.

  }

  submit() {
    let name = this.registerform.value.name!;
    let pass = this.registerform.value.password!;
    let mail = this.registerform.value.mail!;
    console.log(name);
    console.log(pass);
    console.log(mail);

    /*
        let user = new User(0, name, pass, mail, civilStat, sex, info, check == 'true');
        console.log(user);
    
        this.usersService.register(user)
    
          console.log("OK redirigiendo...")
          console.log(this.usersService.users)
          location.href = "login";
    */
  }
}
