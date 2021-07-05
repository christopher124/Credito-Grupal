import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPostsusuario = [];
    for (const usuario of value) {
      if (usuario.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostsusuario.push(usuario);
      } else if (usuario.id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostsusuario.push(usuario);
      } else if (
        usuario.username.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPostsusuario.push(usuario);
      }
    }
    return resultPostsusuario;
  }
}
