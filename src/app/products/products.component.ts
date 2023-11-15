import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor( private service:ProductService){}
  products : Array<ProductRepresentation> = []
  ngOnInit(): void {

    this.service.getAllProductsWithLimit()
      .subscribe(
        {next:(data) => {
            this.products = data;
          },

          error:(error: HttpErrorResponse) => {
            if (error instanceof ErrorEvent){
              // @ts-ignore
              console.log("An error occured:", error.error.message);
            } else {
              console.log(`Servers return status code:${error.status}, error message : ${error.message}`);
            }
          }

        }
      );}
}
