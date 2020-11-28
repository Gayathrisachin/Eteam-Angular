import { Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

    console.log('Inside Constructor of  ColorizerDirective');
    console.log(this.elRef.nativeElement);

    const el = this.elRef.nativeElement;

    //  changing the bgcolor,color using js

    // const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'yellow';
    // using renderer
    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'height', '80px');
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('Success');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(el, p);
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'green');
  }
}
