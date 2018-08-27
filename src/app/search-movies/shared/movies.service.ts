import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Http } from '@angular/http';


@Injectable()
export class MoviesService {

    url: string
    moviesList: AngularFireList<any>;
    constructor(private firebasedb: AngularFireDatabase, private http : Http){
        this.url  = 'https://www.omdbapi.com/?apikey=2f6d5d8c&s='
    }

    search_word(term){
        return this.http.get(this.url + term).map((res:any) => res.json());
    }


    getToDoList() {
      this.moviesList = this.firebasedb.list('movies');
      return this.moviesList;
    }
  

    addMovie(item: any) {
      this.moviesList.push({
        title: item.Title,
        poster: item.Poster,
        type: item.Type,
        year: item.Year,
        imdbID: item.imdbID,
        isChecked: false
      });
    }
  
    checkOrUnCheckTitle($key: string, flag: boolean) {
      this.moviesList.update($key, { isChecked: flag });
    }
  
    removeMovie($key: string) {
      this.moviesList.remove($key);
    }


}



