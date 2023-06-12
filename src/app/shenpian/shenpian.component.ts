import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-shenpian',
  templateUrl: './shenpian.component.html',
  styleUrls: ['./shenpian.component.css']
})
export class ShenpianComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.shenpian().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const title = Object.keys(data)
      const rate = Object.values(data)
      this.options = {
        title: {
          text: '华语神片',
          left:'center'
        },
        tooltip: {
          trigger: 'axis',

          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          left:'left',
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['评分'],
          left:'right',
        },
        xAxis: [
          {
            type: 'category',
            data: title,
            axisLabel: {
              interval: 0
            },
            axisPointer: {
              type: 'shadow',
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '评分',
            min: 9,
            max: 10,
            interval: 0.2,
          }
        ],
        series: [
          {
            name: '评分',
            type: 'bar',
            data: rate
          }
    ]
    }
  })
}}
