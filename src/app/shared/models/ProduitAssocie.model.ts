import { CaracteristiqueProduit } from "./CaracteristiqueProduit.model";
import { ProduitService } from "./produitService.model";

export interface ProduitAssocie{
    id: string;
    etatobjet: string;
    typeAssociation: string;
    typeProduit: string;
    quantite: number;
    uniteQuanttite: string;
    coutAdditionnel:boolean;
    typeCoutAdditionnel: string;
    valeurCoutAdditionnel: number;
    prixDefaut: number;
    refProduit: ProduitService;
    arrayRefProduit: ProduitService[];
    caracteristiqueAssocie: CaracteristiqueProduit[];
}