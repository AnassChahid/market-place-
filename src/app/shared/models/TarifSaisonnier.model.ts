import { ProduitService } from "./produitService.model";

export interface TarifSaisonnier{
    _id: string;
    etatObjet: string;
    couleurSaison: string;
    saison: string;
    dateDebut?: Date | string;
    dateFin: Date | string;
    translations: { language: string; label: string };
    tarifUHT: number;
    monnaie: string,
    actif: boolean;
    produitAssocie: ProduitService; 
    applicationAssocie: string[]
}