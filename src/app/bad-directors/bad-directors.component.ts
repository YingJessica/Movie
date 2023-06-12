import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-bad-directors',
  templateUrl: './bad-directors.component.html',
  styleUrls: ['./bad-directors.component.css']
})
export class BadDirectorsComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.bad_directors().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies);
      const director = Object.keys(data)
      const lastTwo = Object.values(data);
      const a = [];
      const b = [];
      for (let i = 0; i < lastTwo.length; i++) {
        a.push(lastTwo[i][1]);
        b.push(lastTwo[i][2]);
        console.log(a, b);
      }
      this.options = {
        title: {
          text: '烂片占比排名前十的导演',
          left:'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left:'right'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: director
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '烂片数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:a
          },
          {
            name: '一般数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:b,
          },
        ]
      };
    })
  }
}

