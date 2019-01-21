import { NgModule } from "@angular/core";
import {
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbUserModule,
    NbSidebarModule,
    NbMenuModule,
    NbAlertModule,
    NbToastrModule,
    NbContextMenuModule,
} from "@nebular/theme";

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule,
        NbSidebarModule,
        NbMenuModule,
        NbAlertModule,
        NbToastrModule,
        NbContextMenuModule
    ],
    exports: [
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbInputModule,
        NbUserModule,
        NbSidebarModule,
        NbMenuModule,
        NbAlertModule,
        NbToastrModule,
        NbContextMenuModule
    ],
})
export class PageModule { }