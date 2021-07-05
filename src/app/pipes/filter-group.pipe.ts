import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGroup',
})
export class FilterGroupPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPostGroup = [];
    for (const grupo of value) {
      if (grupo.groupname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostGroup.push(grupo);
      } else if (grupo.id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPostGroup.push(grupo);
      } else if (
        grupo.groupleader.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPostGroup.push(grupo);
      }
    }
    return resultPostGroup;
  }
}
