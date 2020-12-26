class LotCereales {

    constructor(id, type, arrive, depart, poids, qualite, humidite, origine) {
        this.idLot = id;
        this.type = type;
        this.arrive = arrive;
        this.depart = depart;
        this.poids = poids;
        this.qualite = qualite;
        this.humidite = humidite;
        this.origine = origine;        
    }

    getIdLot() {
        return this.idLot;
    }

    getType() {
        return this.type;
    }

    getArrive() {
        return this.arrive;
    }

    getDepart() {
        return this.depart;
    }

    getPoids() {
        return this.poids;
    }

    getQualite() {
        return this.qualite;
    }

    getHumidite() {
        return this.humidite;
    }

    getOrigine() {
        return this.origine;
    }
 
} 