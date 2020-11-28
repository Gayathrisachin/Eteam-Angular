import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center" footer>
    <hr>
    <app-menu >
    
    <li class="nav-item footer">
      <a class="nav-link" href="#">Back to Top</a>
    </li></app-menu>
    <p class="redText">Copyright 2020 | Gayatri</p>
    </div>
  `,
  styles: [
  ],
  // encapsulation:ViewEncapsulation.ShadowDom =>this will remove global css like bootstrap allow you to write our own css
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
