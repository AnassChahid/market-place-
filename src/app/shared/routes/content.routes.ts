
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { TestTranslationsComponent } from 'src/app/components/test-translations/test-translations.component';





export const  content : Routes = [
{
    path: 'testTraduction',
    component : TestTranslationsComponent,
    data :{
title : 'Test traduction',
breadcrumb :'',
menu : true 
    },
    canActivate: [true]
}
]

