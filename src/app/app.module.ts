import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { VirtualscrollComponent } from './components/virtualscroll/virtualscroll.component';

import { ScrollService } from './services/scroll.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,AppRoutingModule, ScrollDispatchModule ],
  declarations: [ AppComponent, HelloComponent, TodosComponent, TodoItemComponent, HeaderComponent, AddTodoComponent, AboutComponent, VirtualscrollComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoService,  ScrollService]
})
export class AppModule { }
