import { Component, EventEmitter } from '@angular/core';
import { TodoDataService } from './todo-data-service.service';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = true;

  filter: filterTodo = {
    text: '',
    favourite: false,
  };
  filtredTodoList: todoElement[];
  constructor(private todoDataService: TodoDataService) {
    this.filtredTodoList = this.todoDataService.filterList(this.filter);;
  }

  selectFilter(sortType:string) : void{
    switch (sortType) {
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
    this.todoDataService.setFavouriteToElement(id);
    this.filterList();
  }

  createNewElement(text: string) {
    this.todoDataService.createTodoItem(text);
    this.filtredTodoList = this.todoDataService.filterList(this.filter)
  }

  public filterListByFavourite():void{
    this.filter.favourite = !this.filter.favourite;
    this.filterList();
  }

  filterList(event: Event | null = null,...callbacks:Function[] | null[] ){
    this.filtredTodoList = this.todoDataService.filterList(this.filter)
  }
}
