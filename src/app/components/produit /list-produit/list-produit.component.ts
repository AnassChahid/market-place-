import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/shared/models/produitService.model';
import { ProductService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-list-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {

  produits : ProduitService [] = []
  constructor(private router : Router , private produitService : ProductService){

  }

  ngOnInit(){
    this.produits = this.produitService.getProduit()
  }
  goToDetails(id: string) {
    this.router.navigate(['/det-petiAnn', id]);
  }
}
