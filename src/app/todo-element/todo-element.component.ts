import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { todoElement } from '../app.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss'],
})
export class TodoElementComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    
  }
  @Input()
  todoElement: todoElement = {
    id: 0,
    text: '',
    active: true,
    createdAt: null,
    updatedAt: null,
    favourite: false,
  };

  

  @Output()
  deleteItem: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}
  deleteItemEvent(e: any) : void {
    this.deleteItem.emit(this.todoElement.id);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: this.todoElement.text,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) this.todoElement.text = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  inputFormControl = new FormControl('', Validators.required);
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
