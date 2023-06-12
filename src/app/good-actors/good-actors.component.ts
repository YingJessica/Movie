import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-good-actors',
  templateUrl: './good-actors.component.html',
  styleUrls: ['./good-actors.component.css']
})
export class GoodActorsComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.good_actors().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies);
      const actor = Object.keys(data)
      const lastThree = Object.values(data);
      const good = [];
      const bad = [];
      const normal = [];
      for (let i = 0; i < lastThree.length; i++) {
        good.push(lastThree[i][1]);
        bad.push(lastThree[i][2]);
        normal.push(lastThree[i][3]);
        console.log(good,bad,normal);
      }
      this.options = {
        title: {
          text: '好片占比排名前十的演员',
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
            name: '好片数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:good
          },
          {
            name: '烂片数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:bad,
          },
          {
            name: '一般数',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data:normal
          },
        ]
      };
    })
  }
}
