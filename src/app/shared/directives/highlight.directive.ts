import { Directive, HostListener, HostBinding } from '@angular/core';

const colors = [
  'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
  'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
];

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color')
  backgroundColor: string;

  @HostBinding('style.display')
  display = 'block';

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlightElement();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlightElement('transparent');
  }

  private highlightElement(color?: string): void {
    if (color) {
      this.backgroundColor = color;

      return;
    }

    const index = Math.floor(Math.random() * colors.length);
    this.backgroundColor = colors[index];
  }
}
