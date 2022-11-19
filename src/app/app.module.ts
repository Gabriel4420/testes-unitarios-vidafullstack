import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BankingComponent } from './shared/banking/banking.component'
import { ListComponent } from './shared/investiments/components/list/list.component'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component'

@NgModule({
  declarations: [AppComponent, BankingComponent, ListComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
