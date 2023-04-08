import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { todoElement } from '../app.component';

export type dialogDataNewElement = {
  title: string;
  description: string;
};

@Component({
  selector: 'todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss'],
})
export class TodoCreatorComponent implements OnInit {
  text: string = '';

  @Output()
  createElement: EventEmitter<dialogDataNewElement> = new EventEmitter<dialogDataNewElement>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialog, {
      data: {
        title: '',
        description: '',
      },
    });

    dialogRef.afterClosed().subscribe((result: dialogDataNewElement) => {
      if(result!== undefined)
      this.createElement.emit(result)
    });
  }
}



@Component({
  selector: 'create-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss'],
})
export class CreateTodoDialog {
  inputFormControl = new FormControl('', Validators.required);
  constructor(
    public dialogRef: MatDialogRef<CreateTodoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: dialogDataNewElement
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
