import { Component, OnInit } from "@angular/core";
import { CountryService } from "src/app/service/country.service";
import { Country } from "src/models/country";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  constructor(private countryservice: CountryService) {}
  ngOnInit(): void {
    this.loadCountries();
  }

  private async loadCountries() {
    try {
      this.countryservice.getCountries().subscribe({
        next: (data) => {
          this.countries = data
          console.log(data)
          console.log(this.countries)
        },
        error: (err) => {},
      });
    } catch (e) {
      return;
    }
  }
}
