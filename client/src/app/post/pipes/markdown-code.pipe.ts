import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdownCode'
})
export class MarkdownCodePipe implements PipeTransform {

  transform(value: string): string {
    return `[![image](${value})](${value})`;
  }

}
