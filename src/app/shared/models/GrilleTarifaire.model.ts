import { ProduitService } from "./produitService.model";

export interface GrilleTarifaire{
    _id: string;
    etatObjet: string;
    dateDebut: Date | string;
    dateFin: Date | string;
    quantiteInf: number;
    quantiteSup: number;
    tarifUnitaireHT: number;
    gainsParUnite: number;
    monnaie: string;
    translations: { language: string; commentaire: string };
    actif: boolean;
    produitAssocie: ProduitService;
    applicationAssocie: string[];
}