import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dog } from '../app.component';

@Component({
  selector: 'app-child-life',
  templateUrl: './child-life.component.html',
  styleUrls: ['./child-life.component.css']
})
export class ChildLifeComponent implements OnChanges, OnInit {


@Input()
inputText: string;
@Input()
inputDog: Dog;
show = true;


  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
    console.log(changes);
  }

  ngOnInit() {
  }

  content() {
    this.show = !this.show;
  }

}
