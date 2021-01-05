//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cellule } from "../Partages/cellule.model";

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css']
})
export class SiloComponent implements OnInit {
  public recup: EventEmitter<number> = new EventEmitter<number>();

  public cellules : Cellule[]= [
	new Cellule(1,200,1370),
	new Cellule(2,205,410),
	new Cellule(3,200,1250),
  new Cellule(4,200,900),
  new Cellule(5,200,1124),
  new Cellule(6,200,1300),
  new Cellule(7,200,430),
  new Cellule(8,200,1370),
  new Cellule(9,200,1370),
  new Cellule(10,200,1370),
	];

  //servait de test pour un sélection particuliaire
  //public cellule :Cellule;

  constructor() { }

  //pour transformer un nombre en string
  //nbr.toString()

  ngOnInit(): void {
  }

  recupCellule(index: number): void {

  }

}
