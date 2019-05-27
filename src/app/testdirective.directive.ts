import { Directive , HostListener } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor() { }
  
  @HostListener('mouseenter') onMouseEnter() {
    alert("Don't touch my bacon!");
  }

}
