import { Component } from '@angular/core';

@Component({
  selector: 'app-companyfront',
  templateUrl: './companyfront.component.html',
  styleUrls: ['./companyfront.component.scss']
})
export class CompanyfrontComponent {
  formData = {
    moyenBac: null,
    natureBac: '',
    sexe: '',
    resultat: ''
  };
  hoveredField: { [key: string]: boolean } = {
    moyenBac: false,
    natureBac: false,
    sexe: false,
    resultat: false
  };

  onHoverField(field: string, hovered: boolean) {
    this.hoveredField[field] = hovered;
  }

  predict() {
    console.log('Données de prédiction :', this.formData);
    // Ici, vous pouvez ajouter une requête HTTP vers votre backend Flask pour effectuer la prédiction
  }

}