import { Pipe, PipeTransform } from '@angular/core';

declare var getSfStaticResourceRoot: () => string;

export function getStaticPathForResource(resourcePath : string) {
    return getSfStaticResourceRoot() + resourcePath;
}

@Pipe({
  name: 'staticPath'
})
export class StaticPathPipe implements PipeTransform {

  transform(value: string): string {
    return getStaticPathForResource(value);
  }

}
