export class Cellule {

public numero : number;
public contenu : number;
public contenance : number;
public pourcentage : number;

constructor(num: number, contenu : number,contenance : number)
{
  this.numero = num;
  this.contenu = contenu;
  this.contenance = contenance;
  this.pourcentage = (contenu/contenance)*100
  }
}
