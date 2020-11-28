import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomEventBindingComponent } from './components/custom-event-binding/custom-event-binding.component';

interface SkillList {
  name: string;
  val: number;
}
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [`
.brownText{
color:brown;
}
  `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit{

  // string interpolation
  appName = 'Contact Manager App';
  noOfDevelpoers = 10;
  averageExperience = 2;

  // Ng-styles
  myStyles: any = {
    background: 'blue',
    color: 'white',
    width: '500px',
  };

  // Two way data binding
  courseName = 'Angular';

  // Custom proerty binding--data from parent to child
  parentMessage = 'Message from parent'; // send this to child

  // data from child
  dataReceivedFromChild: string;

  // if static:true, the data would be available in ngOninit() lifecycle hook
  @ViewChild(CustomEventBindingComponent, { static: true }) cebData = CustomEventBindingComponent;


  // *ngIf
  isLoggedIn: boolean;

  // *ngFor
  // skillList: string[] = ['HTML', 'CSS', 'Javascript'];

  skillList: SkillList[] = [{name: 'HTML', val: 1}, {name: 'CSS', val: 2}, {name: 'Javascript', val: 3}];
  selectedValue = 'HTML';

  constructor() { }

  ngOnInit(): void {
    console.log('Inside CebComonent ngOnInit');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit');
    console.log(this.cebData);
  }

  clickMeHandler(): void {
    alert('clicked');
  }

  //  event binding related
  changeNameHandler(e: any, label: string): void {
    e.target.innerText = label;
    e.target.disabled = true;
  }

  profileHandler(event: any): void {
    // Step 5:Display it somewhere in parent comonent
    alert('inside parent comonent');
    console.log(event);
    this.dataReceivedFromChild = event;
  }
}
