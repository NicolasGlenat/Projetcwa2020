

export class Arrivee {

     public origine: string;
     public poids: string;
     public type: string;
     public date: Date;
     public qualite: string;

     constructor (origine: string, poids : string, type : string, date : Date, qualite : string)
     {
     this.origine = origine;
     this.poids = poids;
     this.type = type;
     this.date = date;
     this.qualite = qualite;
    }

}
