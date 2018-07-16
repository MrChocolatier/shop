import { Directive, HostListener, HostBinding, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appClicker]'
})
export class ClickerDirective implements OnInit {
  @HostBinding('style.font-size')
  fontSize: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  @HostListener('click')
  onMouseEnter() {
    this.fontSize = Math.random() * 100 + 'px';
  }

  ngOnInit() {
    const i = this.renderer.createElement('i');
    const text = this.renderer.createText('(click me!):');

    this.renderer.appendChild(i, text);
    this.renderer.appendChild(this.el.nativeElement, i);
  }
}
