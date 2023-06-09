import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-trendinmovie',
  templateUrl: './trendinmovie.component.html',
  styleUrls: ['./trendinmovie.component.css']
})
export class TrendinmovieComponent implements OnInit{
  constructor(private ss:ServiceService){ }
  trendingMovieResult:any=[]
ngOnInit(): void {
  this.trendingData();
}


trendingData()
{
  this.ss.trendingMovieApiData().subscribe((result)=>{
    console.log(result,'trendingresult#');
    this.trendingMovieResult=result.results;
  });

}
}