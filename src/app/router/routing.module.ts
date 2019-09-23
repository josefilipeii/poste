import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from '../hello.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  { path: 'hello', component: HelloComponent, canActivate: [AuthGuard] }
];

@NgModule({

  providers: [],
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }