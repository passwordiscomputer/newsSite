import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryPipe } from './category.pipe'
import { AppComponent } from './app.component';
import { NewsModuleComponent } from './news-module/news-module.component';
import { NewsModuleEditorComponent } from './news-module-editor/news-module-editor.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AddNewsModuleComponent } from './add-news-module/add-news-module.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsModuleComponent,
    NewsModuleEditorComponent,
    GetStartedComponent,
    CategoryPipe,
    AddNewsModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
