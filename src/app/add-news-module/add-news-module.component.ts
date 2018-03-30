import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news-module',
  templateUrl: './add-news-module.component.html',
  styleUrls: ['./add-news-module.component.css']
})
export class AddNewsModuleComponent implements OnInit {
  @Input() childSources;
  sourceNameList = [];

  constructor() { }

  ngOnInit() {
    this.sourceNameList = Object.keys(this.childSources);
    console.log(this.sourceNameList);
  }

}
