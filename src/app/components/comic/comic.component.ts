import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { XkcdService } from '../../services/xkcd.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  arrayLength: number;
  arrayImage: any;
  arrayTitle: string;
  arrayYear: string;
  random: number;
  loading: boolean;
  constructor(private service: XkcdService) {
    this.arrayLength = 0;
    this.arrayImage = '';
    this.arrayTitle = '';
    this.arrayYear = '';
    this.loading = false;
    this.random = 0;
    this.getLengthService();
  }

  getLengthService() {
    this.service.getLengthService().subscribe((number: any) => {
      const comic = document.querySelector('.comic__img');
      this.arrayLength = number.num;
      console.log(this.arrayLength);
      this.random = Math.floor(Math.random() * this.arrayLength + 1);
      console.log(this.random);
      this.getAllService(this.random);
      comic?.setAttribute('id', 'number' + this.random + '');
    });
  }
  getAllService(param: number) {
    this.loading = true;
    this.service.getAllService(param).subscribe((data: any) => {
      this.arrayImage = data.img;
      this.arrayTitle = data.title;
      this.arrayYear = data.year;

      console.log(data);
      console.log(this.arrayImage);
      console.log(this.arrayTitle);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }
  nextComic() {
    const btns = document.querySelectorAll('.qualification__btns button');
    const title = document.querySelector('.qualification__face span');
    const comicBtn = document.querySelector('.comic__btn button');
    title!.innerHTML = '';
    comicBtn?.setAttribute('disabled', 'disabled');
    btns.forEach((element) => {
      element.classList.remove('active');
    });
    this.getLengthService();

    window.scroll(0, 0);
  }

  ngOnInit(): void {}
}
