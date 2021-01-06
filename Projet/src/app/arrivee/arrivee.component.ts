import { Component, OnInit } from '@angular/core';
import { Arrivee } from '../models/arrivee.model';
import { ArriveeService} from '../services/arrivee.service';

@Component({
  selector: 'app-arrivee',
  templateUrl: './arrivee.component.html',
  styleUrls: ['./arrivee.component.css']
})
export class ArriveeComponent implements OnInit { 
   
   arrivees : Arrivee[];
              
  constructor(private arriveeService : ArriveeService) { 
  
   this.arrivees = arriveeService.listeArrivee();
  }

  ngOnInit(): void {
   
  }
  
}

