import { Component, OnInit } from '@angular/core';
import { chemise} from '../../../../src/app/model/chemise' ;
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
 
  constructor() { }
  array : chemise[]
  chemise : chemise ;
  length : number;
  pageSize : number = 8 ;
  page : number = 1;
  ngOnInit() { 
    this.array = [];
    this.chemise = new chemise
    this.chemise.description = 'lorum porum sorum comur norum'
    this.chemise.titre = 'chemise bleu claire marin'
    this.chemise.src = "assets/img/examples/catalogue3.jpg"
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    this.array.push(this.chemise)
    console.log('this array lenght is =' + this.array.length);
    this.length = this.array.length ;

  }

}
