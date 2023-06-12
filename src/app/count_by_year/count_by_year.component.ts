import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-count_by_year',
  templateUrl: './count_by_year.component.html',
  styleUrls: ['./count_by_year.component.css'],
})
export class Count_by_yearComponent implements OnInit{
  movies:any[]=[];
  options:any;

  constructor(private movieService :CountryService) {}
  // 请求数据


  ngOnInit() {this.movieService.count_by_year().subscribe((data:any[])=>{
    this.movies = data;
    console.log(this.movies)
    const year = Object.keys(data)
    const count = Object.values(data)
    this.options = {
      title: {
        text:'华语电影年产量趋势图',
        left:'center',

      },
      xAxis: {
        type: 'category',
        name:'年份',
        data: year
      },
      yAxis: {
        type:'value',
        name:'产量',
      },
      series: [
        {
          data: count,
          type: 'line',
        }
      ]
    }
  })
}}
