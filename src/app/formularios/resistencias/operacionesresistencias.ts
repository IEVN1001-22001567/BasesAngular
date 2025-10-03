import { ResistenciasComponent } from "./resistencias.component";

export class OperacionesResistencias {
  
coloresbanda1:{[key:string]:string}={
  "0":"black",
  "10":"brown",
  "20":"red",
  "30":"orange",
  "40":"yellow",
  "50":"green",
  "60":"blue",
  "70":"purple",
  "80":"gray",
  "90":"white"
};

coloresbanda2:{[key:string]:string}={
  "0":"black",
  "1":"brown",
  "2":"red",
  "3":"orange",
  "4":"yellow",
  "5":"green",
  "6":"blue",
  "7":"purple",
  "8":"gray",
  "9":"white"
};

coloresbanda3:{[key:string]:string} = {
  "1":"black",
  "10":"brown",
  "100":"red",
  "1000":"orange",
  "10000":"yellow",
  "100000":"green",
  "1000000":"blue",
  "10000000":"purple",
  "100000000":"gray",
  "1000000000":"white"
};
textobanda1:{[key:string]:string}={
  "0":"Negro",
  "10":"Cafe",
  "20":"Rojo",
  "30":"Naranja",
  "40":"Amarillo",
  "50":"Verde",
  "60":"Azul",
  "70":"Morado",
  "80":"Gris",
  "90":"Blanco"
};

textobanda2:{[key:string]:string}={
  "0":"Negro",
  "1":"Cafe",
  "2":"Rojo",
  "3":"Naranja",
  "4":"Amarillo",
  "5":"Verde",
  "6":"Azul",
  "7":"Morado",
  "8":"Gris",
  "9":"Blanco"
};

textobanda3:{[key:string]:string} = {
  "1":"Negro",
  "10":"Cafe",
  "100":"Rojo",
  "1000":"Naranja",
  "10000":"Amarillo",
  "100000":"Verde",
  "1000000":"Azul",
  "10000000":"Morado",
  "100000000":"Gris",
  "1000000000":"Blanco"
};

coloresbanda4:{[key:string]:string}={
  "0.05":"gold",
  "0.10":"gray"
};

banda4porcentaje:{[key:string]:string}={
  "0.05":"5%",
  "0.10":"10%"
};

banda4letra:{[key:string]:string} = {
  "0.05":"Dorado",
  "0.10":"Plata"
};

calcularResistencias(banda1:string,banda2:string,banda3:string,banda4:number) {
    let tolerancia:number=0;
    let valorResistencia:number=0;
    let valorMinimo:number=0;
    let valorMaximo:number=0;

    if(banda4==0.05) {
      tolerancia=0.95;
    }
    else if(banda4==0.10) {
      tolerancia=0.90;
    }

    valorResistencia=(parseInt(banda1)+parseInt(banda2));
    valorResistencia=valorResistencia*parseInt(banda3);
    valorMinimo=(valorResistencia*(tolerancia));
    valorMaximo=(valorResistencia*(banda4)+valorResistencia);

    return {
      resistencia:valorResistencia,
      minimo:valorMinimo,
      maximo:valorMaximo
    };
  }
  
}

