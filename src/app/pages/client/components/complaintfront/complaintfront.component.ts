import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // ➔ très important pour envoyer les données

@Component({
  selector: 'app-complaintfront',
  templateUrl: './complaintfront.component.html',
  styleUrls: ['./complaintfront.component.scss']
})
export class ComplaintfrontComponent {
  formData = {
    moyenBac: null,
    scoreFinal: null
  };

  predictionResult: string = ''; // pour afficher la réponse du backend
  hoveredField: { [key: string]: boolean } = {
    moyenBac: false,
    scoreFinal: false
  };

  constructor(private http: HttpClient) {} // Injecte HttpClient ici

  onHoverField(field: string, hovered: boolean) {
    this.hoveredField[field] = hovered;
  }

  predict() {
    console.log('Données envoyées :', this.formData);

    this.http.post<any>('http://localhost:5000/predict', this.formData).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        this.predictionResult = response.prediction; // récupère la prédiction
      },
      (error) => {
        console.error('Erreur lors de la prédiction :', error);
      }
    );
  }
}
