import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss'],
})
export class TodoElementComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  text: string = 'blablaba';

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: this.text,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.text = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
