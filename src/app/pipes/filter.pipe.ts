import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(valor: any, arg: any): any {
    const resultPosts = [];
    for (const cliente of valor) {
      if (cliente.firstname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (cliente.id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (
        cliente.lastname.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(cliente);
      } else if (
        cliente.address.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(cliente);
      } else if (
        cliente.number_int_address.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(cliente);
      } else if (cliente.suburb.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (cliente.city.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (cliente.state.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (cliente.zip.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      } else if (cliente.tel.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cliente);
      }
    }
    return resultPosts;
  }
}
