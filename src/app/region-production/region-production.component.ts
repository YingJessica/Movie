import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-region-production',
  templateUrl: './region-production.component.html',
  styleUrls: ['./region-production.component.css']
})
export class RegionProductionComponent implements OnInit{
  movies: any[] = []
  options: any;

  constructor(private movieService: CountryService) {
  }

  ngOnInit() {
    this.movieService.region_production().subscribe((data: any[]) => {
      this.movies = data;
      console.log(this.movies)
      const region = Object.keys(data)
      const production = Object.values(data)
      console.log(production)

      this.options = {
        title: {
          text: '不同地区电影年产量对比',
          left:'center',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['大陆地区','香港地区','台湾地区'],
          left:'right'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          name:'年份',
          data: [1900, 1913, 1916, 1923, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        },
        yAxis: {
          type: 'value',
          name:'产量'
        },
        series: [
          {
            name: '大陆地区',
            type: 'line',

            data: [0, 0, 1, 1, 3, 3, 1, 2, 5, 5, 4, 2, 8, 9, 4, 5, 6, 5, 4, 2, 4, 5, 1, 1, 1, 1, 6, 7, 11, 6, 7, 6, 2, 4, 6, 10, 9, 16, 15, 6, 9, 13, 22, 12, 4, 1, 1, 0, 0, 2, 3, 3, 2, 9, 8, 7, 7, 4, 21, 30, 32, 28, 29, 42, 36, 40, 51, 44, 43, 57, 25, 47, 51, 53, 32, 23, 28, 20, 34, 49, 39, 47, 51, 63, 85, 92, 102, 111, 155, 253, 299, 395, 344, 475, 739, 1346, 1601, 1075],
          },
          {
            name: '香港地区',
            type: 'line',

            data: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 1, 1, 2, 3, 6, 3, 7, 3, 5, 0, 0, 0, 0, 1, 12, 11, 16, 34, 29, 59, 69, 48, 77, 120, 85, 90, 108, 133, 134, 91, 112, 94, 98, 84, 106, 100, 105, 95, 84, 89, 101, 100, 99, 101, 95, 102, 108, 100, 97, 94, 94, 83, 85, 87, 91, 101, 108, 118, 118, 143, 156, 146, 109, 77, 74, 70, 104, 126, 128, 104, 88, 89, 60, 71, 66, 71, 56, 69, 61, 61, 66, 65, 84, 88, 86, 67],
          },
          {
            name: '台湾地区',
            type: 'line',

            data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 4, 4, 2, 2, 3, 9, 9, 11, 19, 23, 26, 72, 72, 80, 75, 79, 74, 98, 67, 97, 97, 115, 93, 118, 104, 97, 45, 29, 28, 25, 31, 24, 37, 29, 16, 16, 14, 19, 20, 16, 11, 14, 12, 22, 11, 20, 11, 18, 19, 20, 24, 28, 32, 40, 51, 61, 47, 47, 58, 41, 64, 34]
        }
      ]
    };
  })
}}
