import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../../services/xkcd.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  arrayLength: number;
  arrayImage: string;
  arrayTitle: string;
  random: number;
  constructor(private service: XkcdService) {
    this.arrayLength = 0;
    this.arrayImage = '';
    this.arrayTitle = '';
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
    this.service.getAllService(param).subscribe((data: any) => {
      this.arrayImage = data.img;
      this.arrayTitle = data.title;
      console.log(data);
      console.log(this.arrayImage);
      console.log(this.arrayTitle);
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
    this.loader();
  }
  loader() {
    const comic = document.querySelector('.comic');
    comic?.classList.add('inactive');

    setTimeout(function () {
      comic?.classList.remove('inactive');
    }, 3000);
  }

  ngOnInit(): void {}
}
