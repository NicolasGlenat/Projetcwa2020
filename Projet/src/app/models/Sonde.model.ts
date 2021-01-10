import { Machine } from "../models/Machine.model";

export class Sonde extends Machine{

  public temperatureDetectee : number;

  constructor(id : number){
    super(id);
    this.temperatureDetectee=Math.floor(Math.random()*7+12);
  }
}
