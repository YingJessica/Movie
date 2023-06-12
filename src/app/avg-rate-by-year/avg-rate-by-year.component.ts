import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";

@Component({
  selector: 'app-avg-rate-by-year',
  templateUrl: './avg-rate-by-year.component.html',
  styleUrls: ['./avg-rate-by-year.component.css']
})
export class AvgRateByYearComponent implements OnInit{
  movies:any[]=[]
  options:any;
  constructor(private movieService :CountryService) {}
  ngOnInit() {this.movieService.avg_rate_by_year().subscribe((data:any[])=>{
    this.movies = data;
    console.log(this.movies)
    const year = Object.keys(data)
    const avg_rate = Object.values(data)
    this.options = {
      title: {
        text: '华语电影评分趋势图',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        name: '年份',
        data: year,},
        yAxis: {
          type: 'value',
          name: '评分',
        },
        series: [
          {
            data: avg_rate,
            type: 'line',

          }
        ]
      }
    })
  }}
//   [1923, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943,1944,1945,1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]},
// [8.3, , 7.2, 7, 7.1, 6.26, 7.5, 7.85, 7.5, 7.36, 7.64, 7.4, 7.7, 7.58, 6.9, 6.67, 6.6, 7.33, 6.95, 6.8, , , , 7.07, 7.37, 7.42, 6.91, 7.57, 7.5, 7.06, 7.46, 7.34, 7.38, 7.28, 7.44, 7.46, 7.19, 6.94, 7.66, 7.32, 7.12, 6.71, 6.56, 6.49, 6.59, 6.45, 6.6, 6.4, 6.39, 6.33, 6.34, 6.38, 6.45, 6.37, 6.51, 6.77, 6.76, 6.73, 6.72, 6.98, 6.9, 6.79, 6.76, 6.86, 6.66, 6.57, 6.71, 6.55, 6.65, 6.59, 6.79, 6.84, 6.88, 6.98, 6.66, 6.52, 6.41, 6.41, 6.28, 6.38, 6.33, 6.27, 6.31, 6.19, 6.22, 6.15, 5.92, 5.59, 5.56, 5.04, 4.91, 4.85, 4.66, 4.92, 5.23],
