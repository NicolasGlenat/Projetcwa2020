class Sonde extends Machine{

  constructor(id){
    super(id);
    this.temperatureDetectee=0;
  }

  getTemperature(){
    return this.temperatureDetectee;
  }
}
