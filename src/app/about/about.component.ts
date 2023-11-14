import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){

   }
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param =  this.activatedRoute.snapshot.params['username'];
    this.queryParams = this.activatedRoute.snapshot.queryParams['lastname'];
    throw new Error('Method not implemented.');
  }
  param: any;
  queryParams: any;
}
