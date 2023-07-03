import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = []
  private apiKey:       string = '29z0EuRd0l6iXi0M5HlgmmqMZuDnOHNx'
  private serviceUrl:   string ='http://api.giphy.com/v1/gifs'
  constructor( private http: HttpClient ) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory( tag : string ) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10)
  }

  searchTag( tag: string): void {
    if ( tag.length === 0 ) return;

    this.organizeHistory(tag);
    // console.log(this._tagsHistory);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search?`, {params})
      .subscribe( resp => {

        this.gifList = resp.data;
        console.log( {gifs: this.gifList});
      })

// OTRA FORMA DE HACER LA PETICION HTTP
    // fetch('http://api.giphy.com/v1/gifs/search?api_key=29z0EuRd0l6iXi0M5HlgmmqMZuDnOHNx&q=valorant&limit=10')
    //   .then( resp => resp.json() )
    //   .then( data => console.log(data) )
  }
}