class Silo {

  constructor(tabCellule, tabSonde, gaineVentil, ventilateur){
    this.hauteur=0;
    this.volume=0;
    this.tauxRempli=0;
    this.temp=0;
    this.tabCellule=tabCellule;
    this.tabSonde=tabSonde;
    this.gaineVentil=gaineVentil;
    this.ventilateur=ventilateur;
  }

  getHauteur(){
    return this.hauteur;
  }

  getVolume(){
    return this.volume;
  }

  getTauxRempli(){
    return this.tauxRempli;
  }

  getTemperature(){
    return this.temp;
  }

  getTabCellule(){
    for(var i=0; i<tabCellule.length; i++){
      return tabCellule[i];
    }
  }

  getTabSonde(){
    for(var i=0; i<tabSonde.length; i++){
      return tabSonde[i];
    }
  }

  getCellule(i){
    return this.tabCellule[i];
  }

  getSonde(i){
    return this.tabSonde[i];
  }

  getGainVentil(){
    return this.gaineVentil;
  }

  getVentil(){
    return this.ventilateur;
  }
}
