import { Component } from '@angular/core';

@Component({ //Decorador
  selector: 'app-root', //llamar los componentes
  templateUrl: './app.component.html', //invocar el archivo html
  standalone: false, //
  styleUrl: './app.component.css' //hace referencia a la hoja de estilos
})


export class AppComponent {
  title = 'Alex Eduardo Garcia Ramirez';

  //Funcion
  duplicarNumero(valor:number):number{
  return valor*2;
}

//Objeto
anime={
  titulo:"My dress up darling",
  anio: 2025,
  genero:"Romance/Comedia"
}


}


