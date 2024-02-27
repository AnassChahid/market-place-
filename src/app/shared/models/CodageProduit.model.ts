import { ProduitService } from "./produitService.model";

export interface CodageProduit {
    id: string;
    etatobjet: string;
    typecodage: string;
    imageAssocie: string;
    code0uFrequenceAssocie: string;
    produitAssocie: ProduitService;
    instanceActeurAssocie: string[];
    indicationStockAssocie: string;
}