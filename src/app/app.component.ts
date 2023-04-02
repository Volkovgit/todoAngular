import { Component } from '@angular/core';

export type todoElement = {
  id: number;
  text: string;
  active: boolean;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked = true;
  todoElements : todoElement[] = [
    { id: 1, text: 'aaaaaa1', active: true },
    { id: 2, text: 'aaaaaa2', active: true },
    { id: 3, text: 'aaaaaa3', active: true },
    { id: 4, text: 'aaaaaa4', active: true },
  ];

  testFunction(id: number) {
    this.todoElements = this.todoElements.filter((el) => el.id !== id);
  }
}
