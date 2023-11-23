import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from 'src/app/utilities/weather/weather.component';

import { NgxMaskModule } from 'ngx-mask';

import { SharedModule } from 'src/app/shared/shared.module';
import { InputComponent } from 'src/app/shared/input/input.component';
import { CountriesComponent } from 'src/app/views/countries/countries.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),    
    NgxMaskModule.forRoot(),   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    NgbModule,
    ClipboardModule   ,
    SharedModule,    NgSelectModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    WeatherComponent ,
    CountriesComponent    
  ],
  exports:[SharedModule],
  providers: [],
})

export class AdminLayoutModule {}
