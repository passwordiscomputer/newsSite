import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewsModuleComponent } from './news-module/news-module.component';
import { NewsModuleCreatorComponent } from './news-module-creator/news-module-creator.component';
import { NewsModuleEditorComponent } from './news-module-editor/news-module-editor.component';
import { GetStartedComponent } from './get-started/get-started.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsModuleComponent,
    NewsModuleCreatorComponent,
    NewsModuleEditorComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
