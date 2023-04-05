import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxForModule } from '@xmagic/ngx-for';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, NgxForModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
