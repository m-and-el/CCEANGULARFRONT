import { Component, OnInit, Injectable, Input, NgModule } from '@angular/core';
import { chemise } from 'app/model/chemise';
import { environment } from  '../../../../src/environments/environment';
import {Router} from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ViewEncapsulation } from '@angular/compiler/src/core';
@Component({
  selector: 'app-chemise-detail',
  templateUrl: './chemise-detail.component.html',
  styleUrls: ['./chemise-detail.component.scss'],
})
@Injectable({
  providedIn: 'root'
})


export class ChemiseDetailComponent implements OnInit {
  @Input('thumbImage')  thumbImage: string;
  @Input('fullImage')  fullImage: string;
  constructor(private router: Router ) { }
  
array : chemise[] ;
static chemise : chemise ; 
chemisetodisplay : chemise;
indexchemise : number ;
myThumbnail : string ; 
myFullresImage : string ; 


  ngOnInit() {
    console.log(ChemiseDetailComponent.chemise);
    this.chemisetodisplay=ChemiseDetailComponent.chemise;
    this.myFullresImage = this.chemisetodisplay.src
    this.myThumbnail =this.chemisetodisplay.src
    
  }
  getshirt (index : any)
  { 
    ChemiseDetailComponent.chemise = environment.catalogue[index] ;
    this.indexchemise = index
  }
  nextshirt()
  {
    if (this.indexchemise < environment.catalogue.length )
    {
      ChemiseDetailComponent.chemise = environment.catalogue[this.indexchemise+1] ;
      this.indexchemise = this.indexchemise +1
    }

  }


}
