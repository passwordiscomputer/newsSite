import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsModuleCreatorComponent } from './news-module-creator.component';

describe('NewsModuleCreatorComponent', () => {
  let component: NewsModuleCreatorComponent;
  let fixture: ComponentFixture<NewsModuleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsModuleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsModuleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
