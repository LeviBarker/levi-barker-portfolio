import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Output() openClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenClicked(){
    this.openClicked.emit();
  }



}
