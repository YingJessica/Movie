import { Injectable } from '@angular/core';//服务这个文件包括所有与数据库交互的方式，在前端component组件中调用服务
import {Movie} from "./movie";
import {Observable} from "rxjs";
import {catchError, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://127.0.0.1:5000/api/films';
  constructor(private http:HttpClient) {
  }
  count_by_year():Observable<any>{
    const url = `${this.moviesUrl}/count_by_year`
    return this.http.get<Movie[]>(url);
  }
  avg_rate_by_year():Observable<any>{
    const url = `${this.moviesUrl}/avg_rate_by_year`
    return this.http.get(url);
  }
  boxplot():Observable<any>{
    const url = `${this.moviesUrl}/boxplot`
    return this.http.get(url)
  }
  region_production():Observable<any>{
    const url = `${this.moviesUrl}/region_production`
    return this.http.get(url)
  }
  avg_rate_by_region():Observable<any>{
    const url = `${this.moviesUrl}/avg_rate_by_region`
    return this.http.get(url)
  }
  count_by_type():Observable<any>{
    const url = `${this.moviesUrl}/count_by_type`
    return this.http.get(url)
  }
  avg_rating_num_by_type():Observable<any>{
    const url = `${this.moviesUrl}/avg_rating_num_by_type`
    return this.http.get(url)
  }
  avg_rate_by_type():Observable<any>{
    const url = `${this.moviesUrl}/avg_rate_by_type`
    return this.http.get(url)
  }
  avg_rating_num_by_avg_rate():Observable<any>{
    const url = `${this.moviesUrl}/avg_rating_num_by_avg_rate`
    return this.http.get(url)
  }
  avg_rating_num_by_avg_rates():Observable<any>{
    const url = `${this.moviesUrl}/avg_rating_num_by_avg_rates`
    return this.http.get(url)
  }
  good_directors():Observable<any>{
    const url = `${this.moviesUrl}/good_directors`
    return this.http.get(url)
  }
  bad_directors():Observable<any>{
    const url = `${this.moviesUrl}/bad_directors`
    return this.http.get(url)
  }
  good_actors():Observable<any>{
    const url = `${this.moviesUrl}/good_actors`
    return this.http.get(url)
  }
  bad_actors():Observable<any>{
    const url = `${this.moviesUrl}/bad_actors`
    return this.http.get(url)
  }
  shenpian():Observable<any>{
    const url = `${this.moviesUrl}/shenpian`
    return this.http.get(url)
  }
  lanpian():Observable<any>{
    const url = `${this.moviesUrl}/lanpian`
    return this.http.get(url)
  }
}


