import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input("id")
  productId : number = 121;

  constructor(private route: ActivatedRoute) {     
    console.log("Product Detail Component Object is created..");
  }

  ngOnInit() {
    // this.route.params.subscribe((param)=>{
    //   console.log(param);
    //   this.productId = parseInt(param.id);
    // })

  
  }

}
