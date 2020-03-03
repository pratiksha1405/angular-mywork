import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  template: `<h1>Login {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
