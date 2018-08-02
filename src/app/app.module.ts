import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule }   from '@angular/forms';
import { MyfilterPipe } from './myfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    NavbarComponent,
    ContainerComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
