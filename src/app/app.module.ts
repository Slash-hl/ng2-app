import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
 * Platform and Environment providers/directives/pipes
 */
import { AppRouting } from './app.routes';
import { AppComponent as App } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRouting
    ],
    declarations: [
        App
    ],
    bootstrap: [App]
})
export class AppModule {}
