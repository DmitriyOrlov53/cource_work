import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    {
      title: 'Поиск'
    },
    {
      title: 'Статистика'
    },
    {
      title: 'Журнал'
    }
  ]
  ngOnInit() {
  }
}
