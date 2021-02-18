import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class XkcdService {
  constructor(private http: HttpClient) {}
  getLengthService() {
    const path = 'https://any-api.com:8443/http://xkcd.com/info.0.json';
    return this.http.get(path);
  }
  getAllService(param: number) {
    const path =
      'https://any-api.com:8443/http://xkcd.com/' + param + '/info.0.json';
    return this.http.get(path);
  }
}
