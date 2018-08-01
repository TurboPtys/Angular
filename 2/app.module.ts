import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { ChildLolComponent } from './child-lol/child-lol.component';
import { ChildLifeComponent } from './child-life/child-life.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    ChildLolComponent,
    ChildLifeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
