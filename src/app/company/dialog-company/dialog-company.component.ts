
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-company',
  templateUrl: './dialog-company.component.html',
  styleUrls: ['./dialog-company.component.css'],
})
export class DialogCompanyComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<DialogCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close();
  }
}
