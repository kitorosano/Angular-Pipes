import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(
    lista: any[],
    orderBy: string = 'nombre',
    inverso: boolean = false
  ): any[] {
    switch (orderBy) {
      case 'nombre':
        lista.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
        break;

      case 'vuela':
        lista.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
        break;

      case 'color':
        lista.sort((a, b) => (a.color > b.color ? 1 : -1));
        break;
      default:
        break;
    }

    return inverso ? lista.reverse() : lista;
  }
}
