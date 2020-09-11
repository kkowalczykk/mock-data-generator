import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataConfigComponent } from './data-config/data-config.component';
import { AttributeListComponent } from './data-config/attribute-list/attribute-list.component';
import { AttributeComponent } from './data-config/attribute/attribute.component';
import { MockDataComponent } from './mock-data/mock-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataConfigComponent,
    AttributeListComponent,
    AttributeComponent,
    MockDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
