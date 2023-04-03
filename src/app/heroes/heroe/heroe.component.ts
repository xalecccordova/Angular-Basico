import {Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

  

export class HeroeComponent{
    alterEgo:string ='Iron Man';
    nombre:string ='Tony';
    edad: number = 45;

    get alterEgoCapitalizado():string{
        return this.alterEgo.toUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarAlterEgo():void{
        this.alterEgo ='Spiderman';
        this.nombre='Peter Parker';
    }

    cambiarEdad():void{
        this.edad = 30;
    }
}