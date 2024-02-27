import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './components/produit /list-produit/list-produit.component';
import { DetailProduitComponent } from './components/produit /detail-produit/detail-produit.component';






const routes: Routes = [
  {
    path: '',
    component: ListProduitComponent
  },
  { 
    path: 'det-petiAnn/:id',
   component: DetailProduitComponent
   },

 
 
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
