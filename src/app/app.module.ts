import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryPipe } from './country.pipe';
import { SortableHeaderDirective } from './sortable-header.directive';

@NgModule({
  declarations: [AppComponent, CountryPipe, SortableHeaderDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
