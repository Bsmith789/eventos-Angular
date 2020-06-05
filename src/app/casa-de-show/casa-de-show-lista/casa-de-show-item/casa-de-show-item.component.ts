import { Component, OnInit, Input } from '@angular/core';
import { CasaShow } from '../../casa-de-show.model';

@Component({
  selector: 'app-casa-de-show-item',
  templateUrl: './casa-de-show-item.component.html',
  styleUrls: ['./casa-de-show-item.component.css']
})
export class CasaDeShowItemComponent implements OnInit {
  @Input() casaShow: CasaShow;
  @Input() index: number;

  ngOnInit(): void {
  }

}
