import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogCompanyComponent } from './dialog-company/dialog-company.component';
import { CompanyService } from './../service/company-service';
import { Company } from '../model/company';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'remove'];
  dialogRef: MatDialogRef<DialogCompanyComponent>;
  companies: Company[] = [];
  // company: Company = new Company();
  // company: Company = {
  //   name: 'google srl',
  //   address: 'aurel vlaicu',
  //   city: 'cluj-napoca',
  // };

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCompanies();
    // this.company.name = "Ion";
  }

  getCompanies(): void {
    this.companyService.getAllCompanies().subscribe((result) => {
      console.log(result);
      if (result !== undefined && result !== null) {
        this.companies = result;
      }
    });
  }

  openDialog(company: Company): void {
    const dialogRef = this.dialog.open(DialogCompanyComponent, {
      data: { company },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(`Dialog result:`);
      if (data != null || data != undefined) {
        console.log('Name company: ' + company.name);
        this.deleteCompany(data.company);
      }
    });
  }

  deleteCompany(company: Company): void{
    this.companyService.delete(company.id).subscribe(() => {
      console.log("Company deleted !");
    })
  };
}
