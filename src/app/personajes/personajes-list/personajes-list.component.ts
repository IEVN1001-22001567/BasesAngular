import { Component } from '@angular/core';
import { Iheroes } from '../../heroes/iheroes';


@Component({
  selector: 'app-personajes-list',
  standalone: false,
  templateUrl: './personajes-list.component.html',

})
export class PersonajesListComponent {
imageWidht:number=100;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string="";

showImage():void{
  this.muestraImage=!this.muestraImage;
}
heroes:Iheroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"Kame Hame Ha",
      race:"Saiyan",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Final Flash",
      race:"Saiyan",
      ki:8500
    },
    {
      imagen:"https://scontent-mty2-1.xx.fbcdn.net/v/t39.30808-6/495196983_2121776608283478_4159266511675015913_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FKBW9zUHrF4Q7kNvwGnGV-n&_nc_oc=AdluxdX33Sh1uDrjjBIA8rZHH9z6RciwYkl6HGUIMX8K8PBQ5-JG5KfWlQ1WgzxvRwE&_nc_zt=23&_nc_ht=scontent-mty2-1.xx&_nc_gid=c17w3ugWMGANmgUtuG5cMg&oh=00_AfYfnBccHDZa4fAinxXcnErxgE5eJflcu0Molr9Nqrvr8Q&oe=68D7DA8D",
      nombre:"El mamon",
      description:"Jaifon lover",
      race:"Chaifon",
      ki:800000
    },
    {
      "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
       nombre:"Piccolo",
       description:"Makankosappo",
       race:"Namekiano",
       ki:7000
    },
    {
      "imagen":"https://scontent-mty2-1.xx.fbcdn.net/v/t39.30808-6/500741250_1385362462782706_2826797648843343778_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=WBbqglna2ksQ7kNvwFt9mJg&_nc_oc=AdnRU4D_LqSzeh4uJ6Qw3rPrPXfQ9CszmFM6sGxvQJXp-qVRYK4jVgRadlgSr3qd1NQ&_nc_zt=23&_nc_ht=scontent-mty2-1.xx&_nc_gid=WeMNZNXfN2E9cWBg4v1ZfQ&oh=00_AfZ0KvMd81stXwZRi9PBLdX5o1q7l-ddoXTo9YqAIu1QnQ&oe=68D7CB26",
       nombre:"El duki",
       description:"Duki invalido ZAZ",
       race:"Chamion",
       ki:-100000000000000000000000
    },
    {
      "imagen":"https://scontent-mty2-1.xx.fbcdn.net/v/t39.30808-6/480598985_3482798705349507_2460022154687708757_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=TLSTMiBimlIQ7kNvwEXCuHt&_nc_oc=AdkfgTVC_HfcSKF4wHx-pZYabK9dDFoOdd2r8Qz2NAVxCN3H9FfzUesz3qSMwgmpfxg&_nc_zt=23&_nc_ht=scontent-mty2-1.xx&_nc_gid=0GUHB0_kk-lZ-QjtZfJYcg&oh=00_AfY7A2x_aHHQX6xyiwkuYQQ4tZ_IAT4KW6eptIHFB7goxQ&oe=68D7BC51",
       nombre:"Strugenverger",
       description:"El yafte",
       race:"Aleman",
       ki:7000000
    },
    {
      "imagen":"https://dragonball-api.com/characters/Freezer.webp",
       nombre:"Freezer",
       description:"Death Ball",
       race:"Alien",
       ki:9500
    },
 
  ]

}

