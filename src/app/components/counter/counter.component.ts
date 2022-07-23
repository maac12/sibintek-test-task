import { Component, OnInit } from '@angular/core';

import { FoldersServices } from '../../shared/services/folders.services';

@Component({
  selector: 'sibintek-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss']
})
export class CounterComponent implements OnInit {
  countFolder = 0;
  countItem = 0;
  constructor(public folderService: FoldersServices) {}

  ngOnInit(): void {
    this.folderService.folders$.subscribe(data => (this.countFolder = data.length));
    this.folderService.folders$.subscribe(data => {
      this.countItem = data.reduce(
        (sum, folder) => (sum = folder.children.filter(item => item.id).length + sum),
        0
      );
    });
  }
}
