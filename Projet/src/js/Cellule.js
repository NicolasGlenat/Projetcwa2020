class Cellule {

  constructor(id, temperature, remplissage){
    this.id=id;
    this.temperature=temperature;
    this.remplissage=remplissage;
    this.alarme=new Boolean(false);
  }

  getId(){
    return this.id;
  }

  getTemperature(){
    return this.temperature;
  }

  getRemplissage(){
    return this.remplissage;
  }

  setId(id){
    this.id=id;
  }

  setTemperature(temperature){
    this.temperature=temperature;
  }

  setRemplissage(remplissage){
    this.remplissage=remplissage;
  }

  alarme(){
    this.alarme=true;
    return this.alarme;
  }
}
