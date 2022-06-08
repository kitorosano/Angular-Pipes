import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(
    valor: string,
    enMayusculas: boolean = true,
    cantidad: number = valor.length
  ): string {
    return enMayusculas
      ? valor.slice(0, cantidad).toUpperCase() + valor.slice(cantidad)
      : valor.slice(0, cantidad).toLowerCase() + valor.slice(cantidad);
  }
}
