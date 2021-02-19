import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class XkcdService {
  url: string;
  urlComic: string;
  urlExtensions: string;
  constructor(private http: HttpClient) {
    this.url = 'https://any-api.com:8443/';
    this.urlComic = 'http://xkcd.com/';
    this.urlExtensions = 'info.0.json';
  }
  getLengthService() {
    const path = '' + this.url + this.urlComic + this.urlExtensions;
    return this.http.get(path);
  }
  getAllService(param: number) {
    const path =
      '' + this.url + this.urlComic + param + '/' + this.urlExtensions;
    return this.http.get(path);
  }
}
