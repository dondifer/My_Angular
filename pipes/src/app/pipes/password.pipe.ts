import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, args: boolean): any {
    if (args) {
// tslint:disable-next-line:prefer-const
let letras = value.split('');
// tslint:disable-next-line:prefer-const
for (let i in letras) {
  if ( letras.hasOwnProperty(i)) {
    letras[i] = '*';
  }
}
return letras.join('');
    } else {
return value;
    }

  }

}
