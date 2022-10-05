import { FeatureService } from './service/feature-service';
import { UserService } from './service/user-service';
import { ProjectService } from './service/project-service';
import { CompanyService } from './service/company-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule} from '@angular/material/sort';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { FeatureComponent } from './feature/feature.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCompanyComponent } from './company/dialog-company/dialog-company.component';
import { DialogProjectComponent } from './project/dialog-project/dialog-project.component';
import { DialogUserComponent } from './user/dialog-user/dialog-user.component';
import { DialogFeatureComponent } from './feature/dialog-feature/dialog-feature.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ProjectComponent,
    UserComponent,
    FeatureComponent,
    DialogCompanyComponent,
    DialogProjectComponent,
    DialogUserComponent,
    DialogFeatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [HttpClient, CompanyService, ProjectService, UserService, FeatureService],
  bootstrap: [AppComponent]

})
export class AppModule { }
