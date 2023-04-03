import { Component, EventEmitter } from '@angular/core';

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
        text: 'bbbbbb3',
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

  selectFilter(filterType:string){
    switch (filterType) {
      case 'filterByText':
        console.log(this.filtredTodoList.sort(function(a, b) {
          if(a.text < b.text) { return -1; }
          if(a.text > b.text) { return 1; }
          return 0;
        }));
        this.filtredTodoList = this.filtredTodoList.sort()
        break;
      default:
        this.filterList();
        break;
    }
  }

  deleteElement(id: number) {
    this.filtredTodoList = this.filtredTodoList.filter((el) => el.id !== id);
  }

  setFavourite(id:number){
    const item = this.fullList.find(el=>el.id===id) as todoElement;
    item.favourite = !item.favourite
    item.updatedAt = new Date();
  }

  createNewElement(text: string) {
    this.fullList.push({
      id: this.filtredTodoList[this.filtredTodoList.length - 1].id + 1,
      text,
      active: true,
      createdAt: new Date(),
      updatedAt: null,
      favourite: false,
    });
  }

  public filterListByFavourite():void{
    this.filter.favourite = !this.filter.favourite;
    this.filterList();
  }

  filterList(event: Event | null = null,...callbacks:Function[] | null[] ){
    if(event)console.log(event.target as HTMLInputElement);
    let newListWithWiltredItems : todoElement[] = this.fullList;
    newListWithWiltredItems = newListWithWiltredItems.filter((el)=>{
      if(!el.text.includes(this.filter.text)) return false;
      if(this.filter.favourite && el.favourite !== this.filter.favourite) return false;
      return true
    });
    if(callbacks && event){
      callbacks.forEach(cb=>{
        if(cb) newListWithWiltredItems = newListWithWiltredItems.filter(el=>cb(el));
      })
    }
    this.filtredTodoList = newListWithWiltredItems;
  }
}
