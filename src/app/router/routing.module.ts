import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from '../hello.component';
import {AuthGuard} from '../auth.guard';
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {GuestComponent} from "../guest/guest.component";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'guest', component: GuestComponent},
    {path: 'user-detail', component: UserProfileComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({

    providers: [AuthGuard],
    declarations: [],
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class RoutingModule {
}