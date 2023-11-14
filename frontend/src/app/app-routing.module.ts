import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhereIsMyTurtleComponent } from './pages/where-is-my-turtle/where-is-my-turtle.component';

const routes: Routes = [{
  path: '', component: WhereIsMyTurtleComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
