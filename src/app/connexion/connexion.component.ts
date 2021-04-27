import { UserService } from '../service/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

/**
 * Connexion avec demande d'un JWT
 */
export class ConnexionComponent implements OnInit {

  constructor(private userService: UserService) { }

  user$ = new Observable<User>();

  regEx1 = /[A-Za-z]{2,30}/;
  regEx2 = /[A-Za-z0-9]{2,30}/;

  @Input() erreur: boolean = true;

  login: string = "";
  password: string = "";

  error: boolean = true;

  ngOnInit(): void {

  }

  connect() {
    this.userService.login(this.login, this.password).subscribe(flux => console.log(flux));
  }
}

