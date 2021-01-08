export class Cellule {

public numero : number;
public contenu : number;
public contenance : number;
public pourcentage : number;
public type : string;
public qualite : string;

constructor(num: number, contenu : number,contenance : number, type : string, qualite : string)
{
  this.numero = num;
  this.contenu = contenu;
  this.contenance = contenance;
  this.pourcentage = (contenu/contenance)*100
  this.type = type;
  this.qualite = qualite;

  }
}
