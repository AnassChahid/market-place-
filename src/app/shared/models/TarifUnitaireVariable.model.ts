import { ProduitService } from "./produitService.model";

export interface TarifUnitaireVariable {
    _id: string;
    etatObjet: string;
    translations: { language: string; description: string; commentaire: string };
    tarifUnitaireHT: number;
    monnaie: string;
    actif: boolean;
    produitAssocie: ProduitService;
    applicationAssocie: string[];
    
}
