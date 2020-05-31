import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule , Router , Routes} from "@angular/router";

const routes : Routes = [
    { path:'' , redirectTo : 'login' , pathMatch : "full"},
    { path : 'login' , component : LoginComponent},
    { path : 'app' , loadChildren : './dashBoard/dash-board.module#DashBoardModule'}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports :[RouterModule]

})

export class AppRoutingComponent{

}