import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProduitService } from '../models/produitService.model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  getProduit(): ProduitService[]{
    return [ 
            {
              id: '1',
              etatobjet: 'new',
              refProduit: 'ref123',
              categorieProduit: 'electronics',
              classe: 'classA',
              venteSeule: true,
              typeVente: 'online',
              typeTarif: 'fixed',
              tarifSpecial: ['special1', 'special2'],
              produitVertuel: false,
              produitTelechargeable: false,
              event: 'sale',
              dateDebutEvent: '2024-02-22',
              dateFinEvent: '2024-02-28',
              translations: {
                language: 'en',
                designationProduit: 'Beautiful Drew Modular Sectional Sofa with Ottoman by Drew Barrymore, Gray Fabric ',
                slogan: 'Experience the Unforgettable, Embrace the Power of Dreams, and Discover the Limitless Potential of Innovation with Our Product - Your Gateway to the Future!',
                descriptifProduit: 'This is the best product',
                message: 'Limited stock',
                messageBoutonSiExteme: 'Buy now',
                tags: ['tag1', 'tag2'],
              },
              imageProduit: 'image1.jpg',
              madeInProduit: ['Country1', 'Country2'],
              unityProduit: 'piece',
              affichageTarif: 'show',
              tarifUHTPardefaut: 100,
              monnaie: 'USD',
              tvaParDefaut: 20,
              paysTVADefaut: 'US',
              ordreAffichageProduit: 1,
              commandeQuantiteRegelemente: true,
              qteMaxParCommande: 10,
              qteMinParCommande: 1,
              urlSiExteme: 'http://example.com',
              afficherAvis: true,
              affichagePublic: true,
              indicationEtatStock: true,
              relationAvecgestionStock: true,
              etatPublication: 'published',
              produitAssocie: [],
              caracteristiqueAssocie: [],
              grilleAssocie: [],
              tarifIndicqtif: [],
              tarifSaisonnierAssocie: [],
              tarifVariable: [],
              codageProduitAssocie: [],
              marqueAssocie: 'Brand1',
              distanction: [],
              socialMediaAssocie: [],
              garantieAssurance: [],
              etatObjetAssocie: [],
              contenueMediaAssocie: [
               {
                _id : '1',
                taxonomyContenu: "taxonomySample",
                refContenu: "ref123",
                FormatDoc: "PDF",
                translations: {
                    titreDoc: "Document Title",
                    SousTitre: "Document Subtitle",
                    resume: "Document Summary",
                },
                file: "assets/images/1.jpg",
                typeFile:'image',
                image: "image123",
                Date: new Date(),
                Auteurs: ["Author1", "Author2"],
                lienContenu: "www.example.com",
                langueParDefaut: "en",
                Telechargeable: true,
                tailleDoc: 500,
                TailleLimmite: 1000,
                uniteTaille: "KB",
                provenanceInterne: true,
                Payant: false,
                DroitLibre: true,
                DroitPublication: true,
                publicationAutorisee: true,
                preuveDroitSiNonLibre: "proof123",
              },
              {
                _id : '2',
                taxonomyContenu: "taxonomySample",
                refContenu: "ref123",
                FormatDoc: "PDF",
                translations: {
                    titreDoc: "Document Title",
                    SousTitre: "Document Subtitle",
                    resume: "Document Summary",
                },
                file: "assets/images/2.jpg",
                typeFile:'image',
                image: "image123",
                Date: new Date(),
                Auteurs: ["Author1", "Author2"],
                lienContenu: "www.example.com",
                langueParDefaut: "en",
                Telechargeable: true,
                tailleDoc: 500,
                TailleLimmite: 1000,
                uniteTaille: "KB",
                provenanceInterne: true,
                Payant: false,
                DroitLibre: true,
                DroitPublication: true,
                publicationAutorisee: true,
                preuveDroitSiNonLibre: "proof123",
              },
              {
                _id : '3',
                taxonomyContenu: "taxonomySample",
                refContenu: "ref123",
                FormatDoc: "PDF",
                translations: {
                    titreDoc: "Document Title",
                    SousTitre: "Document Subtitle",
                    resume: "Document Summary",
                },
                file: "assets/images/3.jpg",
                typeFile:'image',
                image: "image123",
                Date: new Date(),
                Auteurs: ["Author1", "Author2"],
                lienContenu: "www.example.com",
                langueParDefaut: "en",
                Telechargeable: true,
                tailleDoc: 500,
                TailleLimmite: 1000,
                uniteTaille: "KB",
                provenanceInterne: true,
                Payant: false,
                DroitLibre: true,
                DroitPublication: true,
                publicationAutorisee: true,
                preuveDroitSiNonLibre: "proof123",
              },
              {
                _id : '4',
                taxonomyContenu: "taxonomySample",
                refContenu: "ref123",
                FormatDoc: "PDF",
                translations: {
                    titreDoc: "Document Title",
                    SousTitre: "Document Subtitle",
                    resume: "Document Summary",
                },
                file: "assets/images/4.jpg",
                typeFile:'image',
                image: "image123",
                Date: new Date(),
                Auteurs: ["Author1", "Author2"],
                lienContenu: "www.example.com",
                langueParDefaut: "en",
                Telechargeable: true,
                tailleDoc: 500,
                TailleLimmite: 1000,
                uniteTaille: "KB",
                provenanceInterne: true,
                Payant: false,
                DroitLibre: true,
                DroitPublication: true,
                publicationAutorisee: true,
                preuveDroitSiNonLibre: "proof123",
              },
              {
                _id : '5',
                taxonomyContenu: "taxonomySample",
                refContenu: "ref123",
                FormatDoc: "PDF",
                translations: {
                    titreDoc: "Document Title",
                    SousTitre: "Document Subtitle",
                    resume: "Document Summary",
                },
                file: "assets/images/5.jpg",
                typeFile:'image',
                image: "image123",
                Date: new Date(),
                Auteurs: ["Author1", "Author2"],
                lienContenu: "www.example.com",
                langueParDefaut: "en",
                Telechargeable: true,
                tailleDoc: 500,
                TailleLimmite: 1000,
                uniteTaille: "KB",
                provenanceInterne: true,
                Payant: false,
                DroitLibre: true,
                DroitPublication: true,
                publicationAutorisee: true,
                preuveDroitSiNonLibre: "proof123",
              },],
              instanceoffre: [],
              indicationFraisAddi: [],
              indicationStock: [],
              parametreExped: [],
              statistiqueDirectAssocie: [],
              analyseAssocie: [],
              objetAssocie: [],
              instanceActeurAssocie: [],
              instanceSegment: [],
              criseRisqueAssocie: [],
            },
         
          
    ]
  }




  getPetiteAById(id: string): Observable<ProduitService | undefined> {
    const selectedProduit = this.getProduit().find(
      (produit) => produit.id === id
    );
    return of(selectedProduit);
  }

  public filteredData: any; 


  setFilteredData(data: any) {
    this.filteredData = data;
  }

  getFilteredData() {
    return this.filteredData;
  }
}
