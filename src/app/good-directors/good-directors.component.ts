import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-good-directors',
  templateUrl: './good-directors.component.html',
  styleUrls: ['./good-directors.component.css']
})
export class GoodDirectorsComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.good_directors().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies);
      const director = Object.keys(data)
      const lastThree = Object.values(data);
      const a = [];
      const b = [];
      const c = [];
      for (let i = 0; i < lastThree.length; i++) {
        a.push(lastThree[i][1]);
        b.push(lastThree[i][2]);
        c.push(lastThree[i][3]);
        console.log(a, b, c);
      }
      this.options = {
        title: {
          text: '好片占比排名前十的导演',
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
            name: '好片数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:a
          },
          {
            name: '烂片数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:b,
          },
          {
            name: '一般数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:c
          },
        ]
      };
    })
  }}
