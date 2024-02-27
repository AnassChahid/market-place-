import { ProduitService } from "./produitService.model";

export interface TarifUIndicatif{
    _id: string;
    etatObjet: string;
    tarifUHTPardefaut: number;
    tvaParDefaut: number;
    paysTVADefaut: string;
    produitAssocie: ProduitService;
    applicationAssociee: string[];
    
}
