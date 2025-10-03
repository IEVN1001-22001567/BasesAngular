import { Component } from '@angular/core';
import { OperacionesResistencias } from './operacionesresistencias';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})


export class ResistenciasComponent extends OperacionesResistencias {
banda1:string="";
banda2:string="";
banda3:string="";
banda4:number=0;

valorResistencia:number=0;
valorMaximo:number=0;
valorMinimo:number=0;


 calcularResistenciaMandar(): void {
    let resultado=this.calcularResistencias(this.banda1, this.banda2, this.banda3, this.banda4);
    this.valorResistencia=resultado.resistencia;
    this.valorMinimo=resultado.minimo;
    this.valorMaximo=resultado.maximo;
  
}

/* calcularResistencia():void{
  if(this.banda4 == 0.05){
    this.tolerancia=0.95;
  }
  else if(this.banda4 == 0.10){
    this.tolerancia=0.90;
  }

  this.valorResistencia=(parseInt(this.banda1) + parseInt(this.banda2) * parseInt(this.banda3));
  this.valorMinimo=(this.valorResistencia*(this.tolerancia));
  this.valorMaximo=(this.valorResistencia*(this.banda4) + this.valorResistencia);

} */
}