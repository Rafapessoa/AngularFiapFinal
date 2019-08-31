import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-Loading',
  templateUrl: './Loading.component.html',
  
})
export class LoadingComponent  {

  @Input() show: boolean = false;

}
