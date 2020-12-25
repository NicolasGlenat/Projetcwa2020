class GaineVentilation{

  constructor(){
    this.enMarche=new boolean(false);
    this.defectueux=new boolean(false);
  }

  isRunning(){
    return this.enMarche;
  }

  isDefectueux(){
    return this.defectueux;
  }
}
