import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, ...args: any[]): any {
    const blob = URL.createObjectURL(value);
    URL.revokeObjectURL(value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(blob);
  }

}
