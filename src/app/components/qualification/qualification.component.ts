import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  qualify: string[];
  constructor() {
    this.qualify = ['Molesto', 'Aburrido', 'Agradable', 'Comico', 'Gracioso'];
  }

  classActive(index: any, name: any) {
    const btns = document.querySelectorAll('.qualification__btns button');
    const title = document.querySelector('.qualification__face span');
    const comic = document.querySelector('.comic__img');
    const numberComic = comic?.getAttribute('id');

    btns.forEach((element) => {
      element.classList.remove('active');
    });
    btns[index].classList.add('active');
    title!.innerHTML = name;

    localStorage.setItem('' + numberComic + '', '' + name + '');
  }

  ngOnInit(): void {}
}
