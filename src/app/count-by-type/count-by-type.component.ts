import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-count-by-type',
  templateUrl: './count-by-type.component.html',
  styleUrls: ['./count-by-type.component.css']
})
export class CountByTypeComponent implements OnInit {
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.count_by_type().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const type = Object.keys(data)
      const count = Object.values(data)
      this.options = {
        title: {
          text: '不同类型电影数量',
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
          name:'产量'
        },
        series: [
          {
            data: count,
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

// ['drama', 'comedy', 'action', 'romance', 'mystery', 'thriller', 'crime', 'fantasy', 'horror', 'sowordsmen', 'adventure', 'war', 'scifi', 'cartoon', 'historical', 'musical', 'music', 'biographical', 'homosexua', 'erotic', 'disaster', 'western'],
//   [7767, 4197, 3656, 3508, 1367, 1209, 1194, 1005, 844, 774, 697, 469, 358, 347, 339, 254, 195, 184, 141, 131, 49, 26],
