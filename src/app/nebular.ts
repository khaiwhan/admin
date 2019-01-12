import { NgModule } from "@angular/core";
import {
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
} from "@nebular/theme";

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule
    ],
    exports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule
    ],
})
export class PageModule { }