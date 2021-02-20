import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  qualify: string[];
  constructor() {
    this.qualify = ['Gracioso', 'Comico', 'Agradable', 'Aburrido', 'Molesto'];
  }

  classActive(index: any, name: any) {
    const btns = document.querySelectorAll('.qualification__btns button');
    const title = document.querySelector('.qualification__face span');
    const comic = document.querySelector('.comic__img');
    const comicBtn = document.querySelector('.comic__btn button');
    const numberComic = comic?.getAttribute('id');

    btns.forEach((element) => {
      element.classList.remove('active');
    });
    btns[index].classList.add('active');
    title!.innerHTML = name;

    localStorage.setItem('' + numberComic + '', '' + name + '');
    comicBtn?.removeAttribute('disabled');
  }

  ngOnInit(): void {}
}
