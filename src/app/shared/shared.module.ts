import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
} from '@angular/material';

const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule, BrowserAnimationsModule

];

@NgModule({
    imports: modules,
    exports: modules,
})
export class SharedModule {
}
