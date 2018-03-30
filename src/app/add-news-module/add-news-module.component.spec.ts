import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsModuleComponent } from './add-news-module.component';

describe('AddNewsModuleComponent', () => {
  let component: AddNewsModuleComponent;
  let fixture: ComponentFixture<AddNewsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
