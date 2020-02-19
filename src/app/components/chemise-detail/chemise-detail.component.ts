import { Component, OnInit, Injectable } from '@angular/core';
import { chemise } from 'app/model/chemise';
import { environment } from  '../../../../src/environments/environment';
import {Router} from '@angular/router';
@Component({
  selector: 'app-chemise-detail',
  templateUrl: './chemise-detail.component.html',
  styleUrls: ['./chemise-detail.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ChemiseDetailComponent implements OnInit {

  constructor(private router: Router ) { }
array : chemise[] ;
static chemise : chemise ; 
chemisetodisplay : chemise;
indexchemise : number ;
  ngOnInit() {
    console.log(ChemiseDetailComponent.chemise);
    this.chemisetodisplay=ChemiseDetailComponent.chemise;
    
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
