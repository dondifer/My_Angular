import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    value = value.toLowerCase();
    const nombres = value.split(' ');

    // tslint:disable-next-line:prefer-const
    for ( let i in nombres ) {
      if (nombres.hasOwnProperty(i)) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
    }
    }
    return nombres.join(' ');
  }

}
