import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/shared/services/produit.service';
import { ProduitService } from 'src/app/shared/models/produitService.model';
import { ActivatedRoute } from '@angular/router';
import { Galleria, GalleriaModule } from 'primeng/galleria';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule } from '@ngx-translate/core';
import { ChipModule } from 'primeng/chip';



@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule,GalleriaModule,InputNumberModule,TranslateModule,ChipModule,
    CarouselModule],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {

  selectedProduit: ProduitService | undefined

  displayCustom: boolean = false
  activeIndex: number = 0
  showThumbnails: boolean = false;
  fullscreen: boolean = false;
  activeIndex1: number = 0;
  cd : any
  onFullScreenListener: any;
  @ViewChild('galleria') galleria: Galleria | undefined;

  constructor ( private produit : ProductService , private route : ActivatedRoute ){}

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    animateOut: 'fadeOut',
    navSpeed: 700,
    margin: 0 ,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 4
      },
     
    },
    nav: false,
}


  responsiveOptions: any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  ngOnInit(){   
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('ID from route params:', id);

      this.produit
        .getPetiteAById(id)
        .subscribe((annonce) => {
          console.log('Received petiteAnnonce:', annonce);
          this.selectedProduit = annonce;
        });
    });
  }

  imageClick(index : number ){
    this.activeIndex = index
    this.displayCustom = true;
  }



toggleFullScreen() {
    if (this.fullscreen) {
        this.closePreviewFullScreen();
    } else {
        this.openPreviewFullScreen();
    }

    this.cd.detach();
}

openPreviewFullScreen() {
    let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
        /* Firefox */
        elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
        /* Chrome, Safari & Opera */
        elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
        /* IE/Edge */
        elem['msRequestFullscreen']();
    }
}

onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
}

closePreviewFullScreen() {
  if ((document as any).exitFullscreen) {
      (document as any).exitFullscreen();
  } else if ((document as any)['mozCancelFullScreen']) {
      (document as any)['mozCancelFullScreen'];
  } else if ((document as any)['webkitExitFullscreen']) {
      (document as any)['webkitExitFullscreen'];
  } else if ((document as any)['msExitFullscreen']) {
      (document as any)['msExitFullscreen'];
  }
}


bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
}

unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
}

ngOnDestroy() {
    this.unbindDocumentListeners();
}

galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
}

fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
}
 

}
