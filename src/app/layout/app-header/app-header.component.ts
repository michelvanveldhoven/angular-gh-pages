import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() isHandset: boolean;
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    
  }

}
