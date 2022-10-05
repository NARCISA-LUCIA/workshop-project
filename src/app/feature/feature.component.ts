
import { DialogFeatureComponent } from './dialog-feature/dialog-feature.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FeatureService } from './../service/feature-service';
import { Feature } from './../model/feature';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  features: Feature[] = [];
  constructor(private featureService: FeatureService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllFeaturesByProjectId();
  }

  getAllFeaturesByProjectId(): void {
    this.featureService.getAllFeatures(13).subscribe((result) => {
      console.log(result);
      if (result !== null || result !== undefined) {
        this.features = result;
      }
    });
  }

  openDialog(feature: Feature): void {
    const title = feature.title;
    const dialogRef: MatDialogRef<DialogFeatureComponent, any> = this.dialog.open(DialogFeatureComponent, {
      data: { feature },
    });

    console.log(feature + "here feature");
 
    dialogRef.afterClosed().subscribe((data) => {
      console.log("Feature closed.."); {
        if (data != null && data != undefined) {
          console.log("Feature title: " + title);
          this.deleteFeature(data.feature);
        }
      }
    });
  }

  deleteFeature(feature:Feature): void {
    this.featureService.delete(feature.id).subscribe(() => {
      console.log("This feature has been deleted!");
    })
  };
}

