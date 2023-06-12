import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-avg-rating-num-by-avg-rate',
  templateUrl: './avg-rating-num-by-avg-rate.component.html',
  styleUrls: ['./avg-rating-num-by-avg-rate.component.css']
})
export class AvgRatingNumByAvgRateComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.avg_rating_num_by_avg_rate().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const avg_rate = Object.keys(data)
      const avg_rating_num = Object.values(data)
      this.options = {
        title: {
          text: '不同类型电影评分人数与评分的关系',
          left:'center',
        },
        xAxis: {
          // min:5,
          // max:7,
          interval:0.2,
          data:avg_rate,
          name:'平均分'
        },

        yAxis: {},
        series: [
          {
            symbolSize: 20,
            type: 'scatter',
            data: avg_rating_num,
            name:'平均评分人数'
          }
        ]
      }
    })
  }}
// [5.08, 15330.8],
//   [5.1,10899.9],
//   [5.25, 9689.23],
//   [5.29, 3572.57],
//   [5.45, 21918.7],
//   [5.46, 18722.3],
//   [5.5,10518.1],
//   [5.61, 29664.0],
//   [5.65, 22513.9],
//   [5.72, 19681.6],
//   [5.78, 20725.6],
//   [5.96, 18699.5],
//   [6.17, 18092.8],
//   [6.19, 23653.6],
//   [6.33, 14967.0],
//   [6.43, 8162.16],
//   [6.46, 23135.7],
//   [6.48, 15436.6],
//   [6.57, 4842.3],
//   [6.64, 14867.7],
//   [6.7,95534.1]
