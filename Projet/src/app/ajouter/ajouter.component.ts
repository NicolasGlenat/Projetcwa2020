import { Component, OnInit } from '@angular/core';
import { Arrivee } from '../models/arrivee.model';
import { ArriveeService} from '../services/arrivee.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  newArrivee = new Arrivee("", "", "",new Date("MM/ddd/yyy"));
  
  constructor(private arriveeService : ArriveeService) { }

  ngOnInit(): void {
  }
  addArrivee() {
  //console.log(this.newArrivee);
  
  this.arriveeService.ajouterArrivee(this.newArrivee);
  
}
}
