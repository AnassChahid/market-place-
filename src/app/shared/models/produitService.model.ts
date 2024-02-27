import { CaracteristiqueProduit } from "./CaracteristiqueProduit.model";
import { CodageProduit } from "./CodageProduit.model";
import { GrilleTarifaire } from "./GrilleTarifaire.model";
import { ProduitAssocie } from "./ProduitAssocie.model";
import { TarifSaisonnier } from "./TarifSaisonnier.model";
import { TarifUIndicatif } from "./TarifUIndicatif.model";
import { TarifUnitaireVariable } from "./TarifUnitaireVariable.model";
import { instanceContenueMMedia } from "./instanceContenueMMedia.model";

export interface ProduitService {
    id: string;
    etatobjet: string;
    refProduit: string;
    categorieProduit: string;
    classe: string;
    venteSeule: boolean;
    typeVente: string;
    typeTarif: string;
    tarifSpecial: string[];
    produitVertuel: boolean;
    produitTelechargeable: boolean;
    event: string;
    dateDebutEvent: Date | string;
    dateFinEvent: Date | string;
    translations: {
      language: string;
      designationProduit: string;
      slogan: string;
      descriptifProduit: string;
      message: string;
      messageBoutonSiExteme: string;
      tags: string[];
    }; 
    imageProduit: string;
    madeInProduit: string[];
    unityProduit: string;
    affichageTarif: string;
    tarifUHTPardefaut: number;
    monnaie: string;
    tvaParDefaut: number;
    paysTVADefaut: string;
    ordreAffichageProduit: number;
    commandeQuantiteRegelemente: boolean;
    qteMaxParCommande: number;
    qteMinParCommande: number;
    urlSiExteme: string;
    afficherAvis: boolean;
    affichagePublic: boolean;
    indicationEtatStock: boolean;
    relationAvecgestionStock: boolean;
    etatPublication: string;
    produitAssocie: ProduitAssocie[];
    caracteristiqueAssocie: CaracteristiqueProduit[];
    grilleAssocie: GrilleTarifaire[];
    tarifIndicqtif: TarifUIndicatif[];
    tarifSaisonnierAssocie: TarifSaisonnier[];
    tarifVariable: TarifUnitaireVariable[];
    codageProduitAssocie: CodageProduit[];
    marqueAssocie: string;
    distanction: string[];
    socialMediaAssocie: string[];
    garantieAssurance: string[];
    etatObjetAssocie: string[];
    contenueMediaAssocie: instanceContenueMMedia[];
    instanceoffre: string[];
    indicationFraisAddi: string[];
    indicationStock: string[];
    parametreExped: string[];
    statistiqueDirectAssocie: string[];
    analyseAssocie: string[];
    objetAssocie: string[];
    instanceActeurAssocie: string[];
    instanceSegment: string[];
    criseRisqueAssocie: string[];



  }
  