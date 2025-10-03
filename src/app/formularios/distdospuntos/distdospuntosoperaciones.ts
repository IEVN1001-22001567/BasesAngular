export class disdospuntosoperaciones {
  calcularDistancia(x1:number,y1:number,x2:number,y2:number):number {
    let distanciaresultado:number=0;
    let distanciaop=Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
    distanciaresultado=Math.sqrt(distanciaop);
  return distanciaresultado;
  }
}