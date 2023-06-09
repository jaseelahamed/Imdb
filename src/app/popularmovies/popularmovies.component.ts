import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit{

  movies=[]
  constructor(private s:ServiceService ){

  }
  ngOnInit(): void {
    this.s.getData().then(r=>r.json()).then(data=>this.getMovies(data))
  }

  getMovies(data:any){
    this.movies=data
    console.log(this.movies)
  }
  
}