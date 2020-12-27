class GaineVentilation extends Machine{

  constructor(id){
    super(id);
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
