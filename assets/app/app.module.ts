import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./home/test.component";

@NgModule({
    declarations: [AppComponent,
        HomeComponent,
        TestComponent,
        HeaderComponent
    ],
    imports: [BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}