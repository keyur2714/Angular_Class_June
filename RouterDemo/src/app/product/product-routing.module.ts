import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent} from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { PageNotFoundComponent } from '../pagenotfound.component';
import { AuthGuard } from '../authorization/auth-guard.service';
const routes:Routes = [
    {path:'product',component: ProductListComponent},
    {path:'productdetail/:id',component: ProductDetailComponent,canActivate : [AuthGuard]},
    {
          path:'**',
          component: PageNotFoundComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule{
}