import { Component, OnInit } from '@angular/core';
import { FetchingStaticDataService } from './fetching-static-data/fetching-static-data.service';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.sass']
})
export class StaticDataComponent implements OnInit {

  constructor(public fetchingData: FetchingStaticDataService) { }

  ngOnInit(): void {
    this.fetchingData.getAllData();
  }

}
