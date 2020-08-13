import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlCode'
})
export class HtmlCodePipe implements PipeTransform {

  transform(value: string): string {
    return `<img src="${value}">`;
  }

}
