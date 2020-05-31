import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashBoardComponent } from "./dash-board.component";
import { DocumentComponent } from "./documents/documents.component";
import { ReportComponent } from "./reports/report.component";
import { UserComponent } from "./user/user.component";
const routes: Routes = [
    { path: '', redirectTo: 'dash-board', pathMatch: 'full' },
    {
        path: 'dash-board',
        component: DashBoardComponent,
        children : [
            {path : '' , redirectTo : 'documents' ,  pathMatch : 'full'},
            {path : 'documents' , component : DocumentComponent},
            {path : 'reports' , component : ReportComponent},
            {path : 'user' , component : UserComponent}
        ]
    },



]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashBoardRoutingmodule {

}
