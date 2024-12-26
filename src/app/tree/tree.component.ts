import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  
  
  @Input() data: any;
  selected: { [key: string]: boolean } = {};

  ngOnInit() {
   
  }

  
}
