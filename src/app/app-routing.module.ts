import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { NgonchangesParentComponent } from './ngonchanges-parent/ngonchanges-parent.component';



const routes: Routes = [
  {component: LifeCycleHookComponent , path:'lsh'},
  {component: NgonchangesParentComponent , path:'ngOnchangeExample1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
