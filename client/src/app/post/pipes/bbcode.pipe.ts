import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbCode'
})
export class BBCodePipe implements PipeTransform {

  transform(value: string): string {
    return `[img]${value}[/img]`;
  }

}
