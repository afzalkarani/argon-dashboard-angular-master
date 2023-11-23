import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {



  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {

    this.weatherService.getWeather('bengaluru').subscribe({
      next: data => {

        console.log(data);

      },
      error: e => {
        console.log(e);
      }

    });

  }


  init


}
