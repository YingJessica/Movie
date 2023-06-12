import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-avg-rating-num-by-type',
  templateUrl: './avg-rating-num-by-type.component.html',
  styleUrls: ['./avg-rating-num-by-type.component.css']
})
export class AvgRatingNumByTypeComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.avg_rating_num_by_type().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const type = Object.keys(data)
      const avg_rating_num = Object.values(data)
      this.options = {
        title: {
          text: '不同类型电影关注度',
          left:'center',
        },
        xAxis: {
          type: 'category',
          data: type,
          name:'类型',
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          name:'平均评分人数'
        },
        series: [
          {
            data: avg_rating_num,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            sort:'descending'
          }
        ]
      }
    })
  }}
// ['western', 'fantasy', 'homosexua', 'crime', 'historical', 'disaster', 'adventure', 'romance', 'comedy', 'scifi', 'action', 'war', 'sowordsmen', 'mystery', 'drama', 'biographical', 'thriller', 'cartoon', 'erotic', 'music', 'musical', 'horror'],
//   [95534.1, 29664, 25534.6, 23653.6, 23135.7, 22513.9, 21918.7, 20725.6, 19681.6, 18722.3, 18699.5, 18092.8, 15436.6, 15330.8, 14967, 14867.7, 10899.9, 10518.1, 9689.23, 8162.16, 4842.3, 3572.57],
