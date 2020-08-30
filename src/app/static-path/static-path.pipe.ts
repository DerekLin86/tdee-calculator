import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'staticPath'
})
export class StaticPathPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
