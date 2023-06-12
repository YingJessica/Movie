import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-avg-rate-by-type',
  templateUrl: './avg-rate-by-type.component.html',
  styleUrls: ['./avg-rate-by-type.component.css']
})
export class AvgRateByTypeComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.avg_rate_by_type().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const type = Object.keys(data)
      const avg_rate = Object.values(data)
      this.options = {
        title: {
          text: '不同类型电影质量',
          left:'center',
        },
        xAxis: {
          type: 'category',
          data: type,
          name:'类型',
          axisLabel: {
            interval: 0
          },

        },
        yAxis: {
          type: 'value',
          sort:'descending',
          name:'平均分'
        },
        series: [
          {
            data: avg_rate,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },

          }
        ]
      }
    })
  }}
// ['western', 'biographical', 'musical', 'sowordsmen', 'historical', 'homosexua', 'music', 'drama', 'crime', 'war', 'action', 'romance', 'comedy', 'disaster', 'fantasy', 'cartoon', 'scifi', 'adventure', 'horror', 'erotic', 'thriller', 'mystery'],
//   [6.7, 6.64, 6.57, 6.48, 6.46, 6.43, 6.43, 6.33, 6.19, 6.17, 5.96, 5.78, 5.72, 5.65, 5.61, 5.5, 5.46, 5.45, 5.29, 5.25, 5.1, 5.08],
