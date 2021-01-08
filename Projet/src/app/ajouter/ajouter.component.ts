import { Component, OnInit } from '@angular/core';
import { Arrivee } from '../models/arrivee.model';
import { ArriveeService} from '../services/arrivee.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

<<<<<<< HEAD
  newArrivee = new Arrivee("","", "",new Date("MM/ddd/yyy"), "");
  
=======
  newArrivee = new Arrivee("", "", "",new Date("MM/ddd/yyy"),"");

>>>>>>> 0d1b1cd969ca8423148037c4348fcc23c2939fb6
  constructor(private arriveeService : ArriveeService) { }

  ngOnInit(): void {
  }
  addArrivee() {
  //console.log(this.newArrivee);

  this.arriveeService.ajouterArrivee(this.newArrivee);

}
}
