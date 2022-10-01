import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WeatherApp';


  cityName : string = 'london';
  //define a variable weather data and 
  // assign the value of response to the weather data to use it in the html file
  
weatherData ?: WeatherData


  constructor(private weatherService:WeatherService){}
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onSubmit(){
 this.getWeatherData(this.cityName);
 this.cityName=''
  }
  

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe(
      {
      next: (response)=>{
        this.weatherData=response
        console.log(response);
      }
    }
    )
  }
}
