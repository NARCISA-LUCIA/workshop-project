import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from './../model/user';
import { UserService } from './../service/user-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dialogRef: MatDialogRef<DialogUserComponent>;
  users: User[] = [];
  constructor(
    private userService: UserService, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsersByCompanyAndProjectId();
  }

  getAllUsersByCompanyAndProjectId(): void {
    this.userService.getAllUsers(16,13).subscribe((result) => {
      console.log(result);
      if (result !== null || result !== undefined) {
        this.users = result;
      }
    });
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log("what is hear? ");
      if (data !== null || data !== undefined) {
        console.log("User name: " + user.firstName);
        this.deleteUser(data.user);
      }
    });
  }

  deleteUser(user:User):void {
    this.userService.delete(user.id).subscribe(() => {
      console.log("User deleted!");
    })
  };
}
