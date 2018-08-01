import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksList = ['Sprzątanie', 'Gotowanie', 'Nauka'];

  tasksList2: Array<string> = [];
  tasksDone: Array<string> = [];

  title = 'Nauka angular';
  dog = new Dog('Reksio');
  show = true;
  @ViewChild('childRef')
  childComponent: ChildComponent;

  @ViewChild('inputText')
  input: ElementRef;

  changeTitle() {
    this.title = 'Angular jest ok :|';
  }

  changeDog() {
    this.dog = new Dog('Ciapek');
  }

  nothing() {

  }

  destroy() {
    this.show = !this.show;
  }

  selected(task: string): void {
    console.log(task);
  }

  add2(input: HTMLInputElement) {
    this.tasksList.push(input.value);
    this.input.nativeElement.value = '';
  }

  add(task: string) {
    this.tasksList2.push(task);
  }

  remove(task: string) {
    this.tasksList2 = this.tasksList2.filter( e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}

export class Dog {
  constructor(public name: string) {
  }
}
