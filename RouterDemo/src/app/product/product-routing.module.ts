import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent} from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

const routes:Routes = [
    {path:'product',component: ProductListComponent},
    {path:'product-detail',component: ProductDetailComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule{
}