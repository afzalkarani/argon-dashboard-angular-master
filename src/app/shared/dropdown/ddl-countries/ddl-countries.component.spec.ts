import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlCountriesComponent } from './ddl-countries.component';

describe('DdlCountriesComponent', () => {
  let component: DdlCountriesComponent;
  let fixture: ComponentFixture<DdlCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdlCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdlCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
