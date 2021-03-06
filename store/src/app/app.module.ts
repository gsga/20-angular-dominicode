import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsModule } from './pages/products/products.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
