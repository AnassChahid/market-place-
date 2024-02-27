export interface instanceContenueMMedia{
    _id : string
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
}