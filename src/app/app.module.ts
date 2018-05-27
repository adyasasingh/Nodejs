import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { SchoolComponent } from './school/school.component';
import { PotentialComponent } from './potential/potential.component';
import { ProductsComponent } from './products/products.component';
import { TableComponent } from './table/table.component';
import { CrudproductComponent } from './crudproduct/crudproduct.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AssetsComponent } from './assets/assets.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SchoolComponent,
    PotentialComponent,
    ProductsComponent,
    TableComponent,
    CrudproductComponent,
    DoctorComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
