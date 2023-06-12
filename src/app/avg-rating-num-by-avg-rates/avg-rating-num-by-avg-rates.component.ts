import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-avg-rating-num-by-avg-rates',
  templateUrl: './avg-rating-num-by-avg-rates.component.html',
  styleUrls: ['./avg-rating-num-by-avg-rates.component.css']
})
export class AvgRatingNumByAvgRatesComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.avg_rating_num_by_avg_rates().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const avg_rate = Object.keys(data)
      const avg_rating_num = Object.values(data)

      this.options = {
        title: {
          text: '不同类型电影评分人数与评分的关系',
          left:'center',
        },
        visualMap: {
          min: 15202,
          max: 159980,
          dimension: 1,
          orient: 'vertical',
          right: 10,
          top: 'center',
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['#f2c31a', '#24b7f2']
          }
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          // min:5,
          // max:7,
          data:avg_rate,
          name:'评分'
        },

        yAxis: {},
        scatter:{
          symbolSize:1
        },
        series: [
          {
            symbolSize: 20,
            type: 'scatter',
            data: avg_rating_num,
          }
        ]
      }
    })
  }
}
