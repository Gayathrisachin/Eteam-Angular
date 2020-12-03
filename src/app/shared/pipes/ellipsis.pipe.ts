import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, args: number): unknown {
    console.log(value);
    console.log(args);
    value = value.substr(0, args);
    return value + '...';
  }

}
