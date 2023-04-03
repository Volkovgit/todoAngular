import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// anfular material ui
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import {
  DialogOverviewExampleDialog,
  TodoElementComponent,
} from './todo-element/todo-element.component';
import { CreateTodoDialog, TodoCreatorComponent } from './todo-creator/todo-creator.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoElementComponent,
    DialogOverviewExampleDialog,
    TodoCreatorComponent,
    CreateTodoDialog
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
