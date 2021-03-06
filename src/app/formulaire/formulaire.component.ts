import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})

/*
 * Composant formulaire d'inscription 
*/
export class FormulaireComponent implements OnInit {

  constructor() { }

  regEx1 = /[A-Za-z]{2,30}/;
  regEx2 = /[A-Za-z0-9]{2,30}/;
  regEx3 = /^[0-9]{5}$/;

  @Input() erreur: boolean = true;

  nom: string = "";
  prenom: string = "";
  email: string = "";
  ville: string = "";
  codePostal: string = "";
  adresse: string = "";
  password: string = "";
  passwordConf: string = "";

  error: boolean = true;

  ngOnInit(): void {
  }
}
