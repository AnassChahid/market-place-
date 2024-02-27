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
    contenueMediaAssocie: [{
                  taxonomyContenu : string;
                  refContenu : string;
                  FormatDoc : string;
                  translations : {
                      titreDoc : string;
                      SousTitre : string;
                      resume : string;
                  }
                  file: string
                  image : string;
                  Date : Date;
                  Auteurs : string[];
                  lienContenu : string;
                  langueParDefaut : string
                  Telechargeable : boolean;
                  typeFile: string 
                  tailleDoc : number;
                  TailleLimmite : number;
                  uniteTaille : string ;
                  provenanceInterne : boolean;
                  Payant : boolean;
                  DroitLibre : boolean;
                  DroitPublication : boolean;
                  publicationAutorisee : boolean;
                  preuveDroitSiNonLibre : string;
    }];
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