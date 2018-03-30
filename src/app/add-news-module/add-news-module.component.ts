import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news-module',
  templateUrl: './add-news-module.component.html',
  styleUrls: ['./add-news-module.component.css']
})
export class AddNewsModuleComponent implements OnInit {
  @Input() childSourceList;
  @Input() childCategoriesList;
  filterByCategory: string = "";
  sourceNameList = [];

  constructor() { }

  onCategoryChange(optionFromMenu){
    this.filterByCategory = optionFromMenu;
  }

  ngOnInit() {

  }

}
