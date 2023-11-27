import { Injectable } from '@angular/core';
import { iStep } from '../interfaces/iStep.interfaces';

@Injectable({ providedIn: 'root' })
export class StepsService {

  public frases: iStep[] = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      img: "assets/img/time_managment.svg",
      bgcolor: "#3BB8C8",
    }, {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      img: "assets/img/programming.svg",
      bgcolor: "#E0E2E3",
    }, {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: "assets/img/meditation.svg",
      bgcolor: "#F8E55D",
    }];


}


