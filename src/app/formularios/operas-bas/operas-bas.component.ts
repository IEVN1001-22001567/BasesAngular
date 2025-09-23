import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:string='';
  operacion:string='';


  calculadora():void{

    if (this.operacion==='suma'){
        this.resultado=(parseInt(this.num1)+parseInt(this.num2)).toString();
    }
    if (this.operacion==='resta'){
      this.resultado=(parseInt(this.num1)-parseInt(this.num2)).toString();
    }
    if (this.operacion==='multiplicacion'){
      this.resultado=(parseInt(this.num1)*parseInt(this.num2)).toString();
    }
    if (this.operacion==='division'){
      this.resultado=(parseFloat(this.num1)/parseInt(this.num2)).toString();
    }
}
}
