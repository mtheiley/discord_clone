import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerButtonComponent } from './server-button/server-button.component';
import { ServerBarComponent } from './server-bar/server-bar.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelCategoryComponent } from './channel-category/channel-category.component';
import { ChannelBarComponent } from './channel-bar/channel-bar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerButtonComponent,
    ServerBarComponent,
    ChannelComponent,
    ChannelCategoryComponent,
    ChannelBarComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
