import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-proprty-binding',
  templateUrl: './custom-proprty-binding.component.html',
  styles: [
  ]
})
export class CustomProprtyBindingComponent implements OnInit {

  @Input() age = 20; // @Input makes age age as custom property
  @Input() childMessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }

}
