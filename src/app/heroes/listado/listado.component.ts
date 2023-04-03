import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
   heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];
   heroeBorrado: string = '';
  
  
   borrarHereo(){
    
    //this.heroes.pop(); borra el ultimo elemento
   
    this.heroeBorrado = this.heroes.shift() || ''; // borra el primer elemento y lo returna
    console.log('Borrando...'+ this.heroeBorrado);
    


   }

}
