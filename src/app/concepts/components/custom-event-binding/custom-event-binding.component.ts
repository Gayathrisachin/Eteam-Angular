import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styles: [
  ]
})
export class CustomEventBindingComponent implements OnInit {

// Step1:Create custom event
  // 1.1: Create object for eventemiitter class
  @Output() profileLoaded = new EventEmitter(); // @output makes profileLoaded as custom event to app-custom-event-binding
  constructor() { }

  ngOnInit(): void {
  }


onLoadProfile(event): void {
event.target.innerText = 'Loading Profile';
setTimeout(() => {
  // Step 2: emit that custom event through program
this.profileLoaded.emit('Gayatri');
event.target.innerText = 'Loaded Profile';
}, 5000);
  }
}
