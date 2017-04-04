import _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() current: number;
  @Input() size: number;

  constructor() {}

  ngOnInit() {}

  range(size) {
    return _.range(size);
  }
}
