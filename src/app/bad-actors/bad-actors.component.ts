import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-bad-actors',
  templateUrl: './bad-actors.component.html',
  styleUrls: ['./bad-actors.component.css']
})
export class BadActorsComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.bad_actors().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies);
      const actor = Object.keys(data)
      const lastTwo = Object.values(data);
      const bad = [];
      const normal = [];
      for (let i = 0; i < lastTwo.length; i++) {
        bad.push(lastTwo[i][1]);
        normal.push(lastTwo[i][2]);
        console.log(bad,normal);
      }
      this.options = {
        title: {
          text: '烂片占比排名前十的演员',
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
            data: actor
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
            data:bad
          },
          {
            name: '一般数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:normal,
          },
        ]
      };
    })
  }
}
