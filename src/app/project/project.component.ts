import { DialogProjectComponent } from './dialog-project/dialog-project.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from './../service/project-service';
import { Project } from './../model/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  // projects: string[] = [
  //   "name",
  //   "description"
  // ];
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProjectsById();
  }

  getProjectsById(): void {
    this.projectService.getAllProjectsById(16).subscribe((result) => {
      console.log(result);
      if (result !== null || result !== undefined) {
        this.projects = result;
      }
    });
  }

  openDialog(project: Project): void {
    const dialogRef: MatDialogRef<DialogProjectComponent, any> = this.dialog.open(DialogProjectComponent, {
      data: { project },
    });
    console.log(project.name);

    dialogRef.afterOpened().subscribe((data) => {
      console.log("The modal is open!");
    })

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The modal is closed: ');
      if (data != null && data != undefined) {
        console.log('third log: ');
        this.deleteProject(data.project);
        // console.log('project name is: ' + names);
        
      }
    });
  }

  deleteProject(project: Project): void {
    this.projectService.delete(project.id).subscribe(() => {
      console.log("The project has been deleted!" );
    })
  };
}
