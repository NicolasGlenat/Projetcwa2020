

export class Arrivee {

     public origine: string;
     public poids: string;
     public type: string;
     public date: Date;
     
     constructor (origine: string, poids : string, type : string, date : Date)
     {
     this.origine = origine;
     this.poids = poids;
     this.type = type;
     this.date = date;
    }
              
}
