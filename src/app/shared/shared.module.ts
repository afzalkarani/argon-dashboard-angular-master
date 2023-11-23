import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { CountriesComponent } from './dropdown/countries/countries.component';
import { CountryComponent } from './dataset/country/country.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InputComponent,
    CountriesComponent,
    CountryComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, NgxMaskModule.forRoot()    
  ],
  exports:[ 
    InputComponent  ,
    CountriesComponent,
    CountryComponent    
  ],
  providers:[]
})

export class SharedModule { }
