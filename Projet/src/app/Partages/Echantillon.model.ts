export class Echantillon {

  public id : number;
  public qualite : string;
  public humidite : number;

    constructor(id : number, qualite : string, humidite : number){
      this.id=id;
      this.qualite=qualite;
      this.humidite=humidite;
    }
}
