import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {

  constructor(private viewContainerRef: ViewContainerRef, private temlateRef: TemplateRef<object>) {
    console.log(this.viewContainerRef);

    const isAuth = false;
    // if true the para would be inside the div
    if (isAuth){
      this.viewContainerRef.createEmbeddedView(this.temlateRef);
    }else{
      this.viewContainerRef.clear();
    }
   }

}
