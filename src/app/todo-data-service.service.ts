import { Injectable } from '@angular/core';
import { filterTodo, todoElement } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private data : todoElement[] = [
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
  constructor() { }

  public setFavouriteToElement(id:number):void{
    const item = this.data.find(el=>el.id===id) as todoElement;
    item.favourite = !item.favourite
    item.updatedAt = new Date();
  }

  public filterList(filter:filterTodo,event: Event | null = null,...callbacks:Function[] | null[] ){
    let newListWithFiltredItems : todoElement[] = this.data;
    newListWithFiltredItems = newListWithFiltredItems.filter((el)=>{
      if(!el.text.includes(filter.text)) return false;
      if(filter.favourite && el.favourite !== filter.favourite) return false;
      return true
    });
    // заготовка на возможные callback функции
    // if(callbacks && event){
    //   callbacks.forEach(cb=>{
    //     if(cb) newListWithWiltredItems = newListWithWiltredItems.filter(el=>cb(el));
    //   })
    // }
    return newListWithFiltredItems;
  }


  public createTodoItem(text:string):void{
    this.data.push(this.generateTodoElementData(text));
    console.log(this.data);
  }

  private generateTodoElementData(text:string):todoElement{
    return {
      id: this.data[this.data.length - 1].id + 1,
      text,
      active: true,
      createdAt: new Date(),
      updatedAt: null,
      favourite: false,
    }
  }
}
