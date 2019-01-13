import { NgModule } from "@angular/core";
import {
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbUserModule,
} from "@nebular/theme";

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule
    ],
    exports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule
    ],
})
export class PageModule { }