import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SplitFNamePipe } from './pipes/split-fname.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared/shared.module';
import { InputComponent } from './shared/input/input.component';
import { CountriesComponent } from './views/countries/countries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,    
    NgxMaskModule.forRoot(),
    ComponentsModule,
    NgbModule,
    RouterModule,    
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SplitFNamePipe 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
