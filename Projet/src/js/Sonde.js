class Sonde extends Machine{

  constructor(){
    this.temperatureDetectee=0;
  }

  getTemperature(){
    return this.temperatureDetectee;
  }
}
