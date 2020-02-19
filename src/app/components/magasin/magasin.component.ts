import { Component, OnInit } from '@angular/core';
import { chemise} from '../../../../src/app/model/chemise' ;
import { environment } from  '../../../../src/environments/environment';
import {ChemiseDetailComponent}  from '../../../../src/app/components/chemise-detail/chemise-detail.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
 
  constructor(private chemisedetail : ChemiseDetailComponent,private router: Router ) { }
  array : chemise[]
  chemise : chemise ;
  chemise1 : chemise ;
  chemise2 : chemise ;
  chemise3: chemise ;

  length : number;
  pageSize : number = 8 ;
  page : number = 1;
  ngOnInit() { 
    this.array = [];
    this.chemise = new chemise
    this.chemise.description = '1'
    this.chemise.description = 'lorum porum sorum comur norummm'
    this.chemise.titre = 'chemise bleu claire marinmm'
    this.chemise.src = "assets/img/examples/catalogue3.jpg"


    this.chemise1 = new chemise
    this.chemise1.description = '2'
    this.chemise1.description = 'lorum porum sorum comur norumm'
    this.chemise1.titre = 'chemise bleu claire marinmm'
    this.chemise1.src = "assets/img/examples/catalogue3.jpg"


    this.chemise2 = new chemise
    this.chemise2.description = '3'
    this.chemise2.description = 'lorum porum sorum co'
    this.chemise2.titre = 'chemise bleu claire marinmm'
    this.chemise2.src = "assets/img/examples/catalogue3.jpg"


    this.chemise3 = new chemise
    this.chemise3.description = '1'
    this.chemise3.description = 'lorum'
    this.chemise3.titre = 'chemise bleu claire marinmm'
    this.chemise3.src = "assets/img/examples/catalogue3.jpg"
    this.array.push(this.chemise)
    this.array.push(this.chemise1)
    this.array.push(this.chemise2)
    this.array.push(this.chemise3)

    this.length = this.array.length ;
    environment.catalogue = this.array ;
  }
  clickdetail (chemise : any){

    this.chemisedetail.getshirt( this.array.indexOf(chemise)  );
    this.router.navigate(['detailchemise'])  
  }

}
