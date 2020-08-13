import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgLazyLoad]'
})
export class ImgLazyLoadDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        const img = entries[0].target as HTMLImageElement;
        const lazyUrl = img.getAttribute('data-lazy');
        const fakeImg = new Image();
        fakeImg.src = lazyUrl;
        fakeImg.onload = () => {
          img.src = lazyUrl;
          img.style.opacity = '1';
        };
        imgObserver.disconnect();
      }
    });

    imgObserver.observe(this.elementRef.nativeElement);
  }
}
