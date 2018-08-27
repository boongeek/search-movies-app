
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  MoviesService } from './shared/movies.service'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
  providers: [MoviesService]
})
export class SearchMoviesComponent {

 
  moviesListArray: any[];

  searchTerm : FormControl = new FormControl();

  searchResult = [];

  constructor(private service: MoviesService){
    this.searchTerm.valueChanges
        .debounceTime(400) 
        .subscribe(data => {
            this.service.search_word(data).subscribe(response =>{
             if(response.Response == "True") {

                this.searchResult = response.Search;
                console.log( this.searchResult);

              }
           
            })
        })
  }



  ngOnInit() {
    this.service.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.moviesListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.moviesListArray.push(x);
      })

      //sort array isChecked false  -> true
        this.moviesListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });
  }

  onAdd(item) {
    this.service.addMovie(item);
    item.Title = null;
  }

  alterCheck($key: string,isChecked) {
    this.service.checkOrUnCheckTitle($key,!isChecked);
  }

  onDelete($key : string){
    this.service.removeMovie($key);
  }





}


