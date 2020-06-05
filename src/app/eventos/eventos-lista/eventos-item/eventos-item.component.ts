import { Component, OnInit, Input  } from '@angular/core';
import { Evento } from '../../eventos.model';


@Component({
  selector: 'app-eventos-item',
  templateUrl: './eventos-item.component.html',
  styleUrls: ['./eventos-item.component.css']
})
export class EventosItemComponent implements OnInit {
  @Input() evento: Evento;
  @Input() index: number;

  ngOnInit(): void {
  }

}
