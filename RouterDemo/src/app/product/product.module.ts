import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { AuthGuard } from '../authorization/auth-guard.service';
@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        ProductRoutingModule        
    ],
    providers: [AuthGuard]
})
export class ProductModule{
    constructor(){
        console.log("Product Moduule Loaded...");
    }
}