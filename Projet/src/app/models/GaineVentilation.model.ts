import { Machine } from "../models/Machine.model";

export class GaineVentilation extends Machine{

  public enMarche : boolean;
  public defectueux : boolean;

  constructor(id : number){
    super(id);
    this.enMarche=false;
    this.defectueux=false;
  }

  isRunning(){
    return this.enMarche;
  }

  isDefectueux(){
    return this.defectueux;
  }
}
