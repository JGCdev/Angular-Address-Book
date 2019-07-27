import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatAddressPipe } from './format-address.pipe';
import { BlockAddComponent } from './block-add/block-add.component';
import { BlockEditComponent } from './block-edit/block-edit.component';
import { BlockListComponent } from './block-list/block-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormatAddressPipe,
    BlockAddComponent,
    BlockEditComponent,
    BlockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
