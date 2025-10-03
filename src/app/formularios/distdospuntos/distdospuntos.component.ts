import { Component } from '@angular/core';
import { disdospuntosoperaciones } from './distdospuntosoperaciones';

@Component({
  selector: 'app-distdospuntos',
  standalone: false,
  templateUrl: './distdospuntos.component.html',
  styleUrl: './distdospuntos.component.css'
})
export class DistdospuntosComponent extends disdospuntosoperaciones {
x1:string="";
y1:string="";
x2:string="";;
y2:string="";;
distancia:number=0;


calcularDistanciaMandar(): void {
  let resultado=this.calcularDistancia(parseInt(this.x1),parseInt(this.y1),parseInt(this.x2),parseInt(this.y2));
  this.distancia=resultado;

}
}
