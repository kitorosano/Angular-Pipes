import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect Pipe
  nombre: string = 'Esteban';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarPersona() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  // i18nPlural Pipe
  clientes: string[] = ['Esteban', 'Juan', 'Pedro', 'Maria'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Esteban',
    edad: 19,
    direccion: 'Paysandu, Uruguay',
  };

  // Json Pipe 
  heroes = [
    { nombre: 'Logan', edad: '18' },
    { nombre: 'Wolverine', edad: '20' },
    { nombre: 'Magneto', edad: '21' },
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta!!!');
    }, 3500);
  });
}
