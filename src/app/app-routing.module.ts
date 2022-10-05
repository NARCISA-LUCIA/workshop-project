
import { FeatureComponent } from './feature/feature.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  { path: 'companies', component: CompanyComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'users', component: UserComponent },
  { path: 'feature', component: FeatureComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
