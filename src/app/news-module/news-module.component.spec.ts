import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsModuleComponent } from './news-module.component';

describe('NewsModuleComponent', () => {
  let component: NewsModuleComponent;
  let fixture: ComponentFixture<NewsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
