import { NgModule } from "@angular/core";
import {
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbUserModule,
    NbSidebarModule,
    NbMenuModule,
} from "@nebular/theme";

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule,
        NbSidebarModule,
        NbMenuModule
    ],
    exports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule,
        NbSidebarModule,
        NbMenuModule
    ],
})
export class PageModule { }