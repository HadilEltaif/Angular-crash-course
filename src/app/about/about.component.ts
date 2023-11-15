import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import {ProductRepresentation} from "../services/api/models/product-representation";
import {ratingRepresentation} from "../services/api/models/rating-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{

  }

 /* ngOnInit(): void {

    this.service.getAllProductsWithLimit().subscribe({next: (data) => {
        console.log(data);
      }});

  }*/


  // ngOnInit(): void {
    // console.log(this.activatedRoute);
   // this.param =  this.activatedRoute.snapshot.params['username'];
     // this.queryParams = this.activatedRoute.snapshot.queryParams['lastname'];
  //   throw new Error('Method not implemented.');
  // }
  // param: any;
   // queryParams: any;

