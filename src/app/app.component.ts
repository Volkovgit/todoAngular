import { Component } from '@angular/core';

export type todoElement = {
  id: number;
  text: string;
  active: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  favourite: boolean;
};

export type filterTodo = {
  text: string;
  favourite: boolean;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked = true;

  filter: filterTodo = {
    text: '',
    favourite: false,
  };
  filtredTodoList: todoElement[];
  fullList : todoElement[];
  constructor() {
    const todoElements: todoElement[] = [
      {
        id: 1,
        text: 'aaaaaa1',
        active: true,
        createdAt: new Date(),
        updatedAt: null,
        favourite: false,
      },
      {
        id: 2,
        text: 'aaaaaa2',
        active: true,
        createdAt: new Date(),
        updatedAt: null,
        favourite: false,
      },
      {
        id: 3,
        text: 'aaaaaa3',
        active: true,
        createdAt: new Date(),
        updatedAt: null,
        favourite: false,
      },
      {
        id: 4,
        text: 'aaaaaa4',
        active: true,
        createdAt: new Date(),
        updatedAt: null,
        favourite: false,
      },
    ];
    this.fullList = todoElements;
    this.filtredTodoList = todoElements;
  }

  deleteElement(id: number) {
    this.filtredTodoList = this.filtredTodoList.filter((el) => el.id !== id);
  }

  createNewElement(text: string) {
    this.filtredTodoList.push({
      id: this.filtredTodoList[this.filtredTodoList.length - 1].id + 1,
      text,
      active: true,
      createdAt: new Date(),
      updatedAt: null,
      favourite: false,
    });
  }

  filterList(event:any){
    this.filtredTodoList = this.fullList.filter((el)=>el.text.includes(event.target.value)); 
  }
}
