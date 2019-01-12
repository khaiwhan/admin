import { NgModule } from "@angular/core";
import { 
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
 } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
    imports: [
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule,
    ],
    exports: [
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule
    ],
})
export class ngModule { }