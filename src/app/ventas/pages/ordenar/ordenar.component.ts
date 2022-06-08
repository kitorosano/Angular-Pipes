import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = true;
  ordernarPor: string = '';
  ordenarReverso: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Aquaman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
  ];

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrder(valor: string) {
    if (this.ordernarPor == valor) this.ordenarReverso = !this.ordenarReverso;
    this.ordernarPor = valor;
  }
}
