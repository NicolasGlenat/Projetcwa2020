export class LotCereales {

  public idLot : number;
  public type : string;
  public arrive : number;
  public depart : number;
  public poids : number;
  public qualite : string;
  public humidite : number;
  public origine : string;

    constructor(id : number, type : string, arrive : number, depart : number,
       poids : number, qualite : string, humidite : number, origine : string) {
        this.idLot = id;
        this.type = type;
        this.arrive = arrive;
        this.depart = depart;
        this.poids = poids;
        this.qualite = qualite;
        this.humidite = humidite;
        this.origine = origine;
    }
}
