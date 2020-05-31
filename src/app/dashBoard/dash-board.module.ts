import { NgModule } from "@angular/core";
import { DashBoardRoutingmodule } from "./dash-board.routing.module";
import { AppFooter } from "./../layouts/footer/footer.component";
import { AppHeader } from "./../layouts/header/header.component";
import { SideNavigationComponent } from "./../layouts/sideNavigation/side-nav.component";
import { DashBoardComponent } from "./dash-board.component";
import { DocumentComponent } from "./documents/documents.component";
import { ReportComponent } from "./reports/report.component";
import { UserComponent } from "./user/user.component";

@NgModule({
    imports: [DashBoardRoutingmodule],
    exports: [],
    declarations: [
        AppFooter,
        AppHeader,
        SideNavigationComponent,
        DashBoardComponent,
        DocumentComponent,
        ReportComponent,
        UserComponent
    ]
})

export class DashBoardModule {

} 