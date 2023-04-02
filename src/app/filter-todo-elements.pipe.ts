import { Pipe, PipeTransform } from '@angular/core';
import { todoElement } from './app.component';

@Pipe({
  name: 'filterTodoElements',
})
export class FilterTodoElementsPipe implements PipeTransform {
  transform(elements: todoElement[], filter: string): todoElement[] {
    if (!filter) return elements;
    return elements.filter((el) => el.text.includes(filter));
  }
}
