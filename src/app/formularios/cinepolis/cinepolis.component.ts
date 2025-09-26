import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
nombre:string="";
cantidadcompradores:string="";
tarjeta:boolean=true;
cantidadboletos:string="";
resultados:number=0; 
descuento:number=0;
operacion:number=0;
error:string="";
alerta:boolean=true;
maxBoletos:string="7";
bletosmaxsuma:number=0;  

descuentotarjeta():void{
  this.tarjeta=!this.tarjeta;
}

procesar(): void {
  this.bletosmaxsuma=parseInt(this.maxBoletos) * (parseInt(this.cantidadcompradores));
  if (parseInt(this.cantidadboletos) > parseInt(this.bletosmaxsuma.toString())) {
    this.resultados = 0;
    this.error = 'No se pueden comprar mas de 7 boletos por persona';
    return;
  } else {
    alert('Compra exitosa');
    this.error = '';
  }
  if (parseInt(this.cantidadboletos) > 5) {
    this.descuento = 0.15;
  } else if (parseInt(this.cantidadboletos) >= 3 && parseInt(this.cantidadboletos) <= 5) {
    this.descuento = 0.10;
  } else if (parseInt(this.cantidadboletos) <= 2) {
    this.descuento = 0;
  }
  this.operacion = 12 * parseInt(this.cantidadboletos) * parseInt(this.cantidadcompradores);
  this.operacion = this.operacion - (this.operacion * this.descuento);

  if(this.tarjeta) {
    this.operacion=this.operacion-(this.operacion*0.10);
  }
  else{
    this.operacion=this.operacion;
  }
  this.resultados=this.operacion/parseInt(this.cantidadcompradores);
  this.error = '';
}
}
