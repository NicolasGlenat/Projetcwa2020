import { Machine } from "../models/Machine.model";

export class Ventilateur extends Machine{

  public enMarche : boolean;
  public defectueux : boolean;

  constructor(id : number){
    super(id);
    this.enMarche=false;
    this.defectueux=false;
  }
}
