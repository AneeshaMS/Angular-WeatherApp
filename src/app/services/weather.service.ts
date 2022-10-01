import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {WeatherData} from '../model/weather.model'

let weatherApi='https://openweather43.p.rapidapi.com/weather';
let apiKey='da0f9c8d90bde7e619c3ec47766a42f4';
let XRapidAPIHostHeaderName='X-RapidAPI-Host';
 let  XRapidAPIHostHeaderValue='openweather43.p.rapidapi.com';
 let  XRapidAPIKeyHeaderName='X-RapidAPI-Key';
 let XRapidAPIKeyHeaderValue='4058ffeb2cmsh9495cecbc337113p163d23jsnca3a46c7fe8e'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }                           

  //method to get weather data

  getWeatherData(cityName:string) : Observable<WeatherData>{
   return this.http.get<WeatherData>(weatherApi,{
    headers: new HttpHeaders()
    .set(XRapidAPIHostHeaderName,XRapidAPIHostHeaderValue)
    .set(XRapidAPIKeyHeaderName,XRapidAPIKeyHeaderValue),
    params: new HttpParams()
    .set('q',cityName)
    .set('appid',apiKey)
    .set('units','metric')
   } 
 ) }
}
