import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  pi = Math.PI;
  date = new Date();

  dog = new Dog('Reksio', 3);

  dog2: Dog;

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  dogs = new Array<Dog>();


  isVisible = true;
  isHidden = false;

  inputText = 'Pole tekstowe';
  inputText2Way = '';
  button = true;
  showClick = '';


  input2Text = 'Tekst';
  maxLengt = 5 ;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;

  isDisable2 = true;
  inputText3 = '';
  colorClass2 = 'color';

  profession = 'programista';
  skill = 'Angular';
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  constructor() {
    this.dogs.push(new Dog('fafik', 8), new Dog('Łatek', 5), new Dog('Maksiu', 2), new Dog('Lolek', 10), new Dog('Bolek', 6));
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter( e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  saveP(event) {
    this.profession = event.target.value;
  }

  saveS(event) {
    this.skill = event.target.value;
  }

  onFocus() {
    this.colorClass2 = 'color2';
  }

  onClick2(event) {
    console.log(event);
  }

  onMosueMove(event) {
    console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }

  onPaste() {
    this.inputText3 = 'Nie wklejaj, wpisz!';
  }

  change2() {
    this.isDisable2 = false;
  }
  change() {
    this.input2Text = 'Zmina teksu i  koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png';
  }

  click(event) {

    this.showClick = 'Przycisk aktywny';
    this.button = false;
  }

  show() {
    this.isVisible = !this.isVisible;
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }


  showDog() {

    return 'Moj pies to ' + this.dog.name + ' i ma ' + this.dog.age + 'lata';
  }

}

class Dog {
  constructor(public name: string, public age: number) {

  }
}


