import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsModuleEditorComponent } from './news-module-editor.component';

describe('NewsModuleEditorComponent', () => {
  let component: NewsModuleEditorComponent;
  let fixture: ComponentFixture<NewsModuleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsModuleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsModuleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
