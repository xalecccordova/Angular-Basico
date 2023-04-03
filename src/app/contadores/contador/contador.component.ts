import{Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

<button (click)="sumar()"> +1 </button>
<span>{{numero1}}</span>
<button (click)="restar()"> -1</button>
<br><br>


<button (click)="acumular(+2)"> +2 </button>
<span>{{numero2}}</span>
<button (click)="acumular(-2)"> -2</button>

<br><br>
<h3>La base es <strong> 5</strong> </h3>
<button (click)="acumularBase(+base)"> + {{base}} </button>
<span>{{numero3}}</span>
<button (click)="acumularBase(-base)"> - {{base}}</button> 
    `

})

export class ContadorComponent{
    title = 'Contador App';
    numero1: number = 10;
    numero2: number =10;
    numero3: number =10;
    base   : number = 5;
    sumar(){
      this.numero1 +=1;
    }
  
    restar(){
      this.numero1 -=1;
    }
  
    acumular(valor:number){
      this.numero2 += valor;
  
    }
  
    acumularBase(valor:number){
      this.numero3 +=  valor;
    }

}