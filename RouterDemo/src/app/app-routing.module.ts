import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AbcComponent } from './aboutus/abc/abc.component';

const routes: Routes = [
    {path:'home',component:HomeComponent},            
      {path:'aboutus',component:AboutusComponent},
      {
        path:'aboutus',
        children:[
         {
             path:'abc', component: AbcComponent 
         }
        ]        
      },
      {path:'contactus',component:ContactusComponent}
];
@NgModule({
    imports: [        
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{
}