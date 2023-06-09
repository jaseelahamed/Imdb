import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import{ServiceService}from '../service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private ss:ServiceService){}
ngOnInit(): void {
  
}
searchResultMovie:any;
searchForm = new FormGroup({
  'movieName':new FormControl(null)
});
submitForm()
{
  console.log(this.searchForm.value,'searchform');
  this.ss.getsearchMovie(this.searchForm.value).subscribe((result)=>{
    console.log(result,'searchmovie##');
    this.searchResultMovie = result.results;
  })
}

}
