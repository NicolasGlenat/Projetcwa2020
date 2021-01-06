import { Injectable } from '@angular/core';
import { Arrivee } from '../models/arrivee.model';

@Injectable({
  providedIn: 'root'
})
export class ArriveeService {

	  arrivees : Arrivee[];

  constructor() {
  this.arrivees = [ 
   { origine : "France", poids : "10000kg", type : "Blé", date : new Date ("01/14/2018")},
   { origine : "Allemagne", poids : "20000kg", type : "Riz", date : new Date ("05/25/2020")}
   
   ];
   
   }
    listeArrivee():Arrivee[]{
	return this.arrivees;
    }
    
    ajouterArrivee(arrivee : Arrivee) {
    this.arrivees.push(arrivee);
    
    }
}
