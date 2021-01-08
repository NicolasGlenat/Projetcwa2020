//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cellule } from "../Partages/cellule.model";
import { Machine } from "../Partages/Machine.model";
import { Sonde } from "../Partages/Sonde.model";
import { Ventilateur } from "../Partages/Ventilateur.model";
import { GaineVentilation } from "../Partages/GaineVentilation.model";
import { LotCereales } from "../Partages/LotCereales.model";
import { Echantillon } from "../Partages/Echantillon.model";

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css']
})
export class SiloComponent implements OnInit {
  public recup: EventEmitter<number> = new EventEmitter<number>();

  public cellules : Cellule[]= [
	new Cellule(1,200,1370,"Blé","Excellente"),
  new Cellule(2,200,1370,"Blé","Bonne"),
  new Cellule(3,200,1370,"Blé","Passable"),
  new Cellule(4,200,1370,"Maïs","Excellente"),
  new Cellule(5,200,1370,"Maïs","Bonne"),
  new Cellule(6,200,1370,"Maïs","Passable"),
  new Cellule(7,200,1370,"Orge","Excellente"),
  new Cellule(8,200,1370,"Orge","Bonne"),
  new Cellule(9,200,1370,"Orge","Passable"),
  new Cellule(10,200,1370,"Riz","Excellente"),
  new Cellule(11,200,1370,"Riz","Bonne"),
  new Cellule(12,200,1370,"Riz","Passable"),


	];

  //servait de test pour un sélection particuliaire
  //public cellule :Cellule;
  public sondes : Sonde[]=[
    new Sonde(1),
    new Sonde(2),
    new Sonde(3),
    new Sonde(4),
    new Sonde(5),
  ];



  constructor() { }

  //pour transformer un nombre en string
  //nbr.toString()

  ngOnInit(): void {
  }

  recupCellule(index: number): void {

  }

  moyenneSondes(){
    var res=0;
    for(var i=0; i<this.sondes.length; i++){
      res+=this.sondes[i].temperatureDetectee;
    }
    res/=this.sondes.length;
    return res;
  }

}
