import { ProduitAssocie } from "./ProduitAssocie.model";
import { ProduitService } from "./produitService.model";

export interface CaracteristiqueProduit{
    id: string;
    etatobjet: string;
    natureCaracteristique: string;
    refcaracteristique: string;
    affichageUniqEnPrive: boolean;
    ordreCaracteristique: number;
    produitPrincipal: ProduitService;
    refProduitAssocie: ProduitAssocie;
    instanceCaracteristiaue: string[];

}