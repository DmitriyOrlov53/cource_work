import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    {
      title: 'Статистика',
      link: '/statistic'
    },
    {
      title: 'Журнал',
      link: '/gradebook'
    },
    {
      title: 'Учителя, Студенты, Предметы',
      link: '/static-data'
    }
  ];
  openAuthorInfo(): void {
    this.dialog.open(AuthorComponent);
  }
  constructor(private dialog: NbDialogService) {}
  ngOnInit(): void {
  }
}
