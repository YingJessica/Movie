import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-lanpian',
  templateUrl: './lanpian.component.html',
  styleUrls: ['./lanpian.component.css']
})
export class LanpianComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.lanpian().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const title = Object.keys(data)
      const rating_num = Object.values(data)
      this.options = {
        title: {
          text: '华语烂片',
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
            min: 4,
            max: 6,
            interval: 0.2,
          }
        ],
        series: [
          {
            name: '评分',
            type: 'bar',
            data: rating_num
          }
        ]
      }
    })
  }


}
