import { Component, OnInit } from '@angular/core';
import { RecetteInterface } from '../../modules/shared/interfaces/recette-interface';
import { RecetteService } from '../../modules/shared/services/recette-service';
@Component({
  selector: 'app-semainier-secours',
  templateUrl: './semainier-secours.component.html',
  styleUrls: ['./semainier-secours.component.scss']
})
export class SemainierSecoursComponent implements OnInit {

  public recettes : RecetteInterface[];
  
  constructor(private recetteService: RecetteService) { }

  ngOnInit() {
  }
  afficheRecette(){
    this.recetteService.getRecette().subscribe((recettes) => {
      this.recettes=recettes;
      console.log(this.recettes.length + ' recettes en stock');
    }
    )
  };
}
