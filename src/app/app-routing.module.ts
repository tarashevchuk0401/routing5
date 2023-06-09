import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {path: '', component: OneComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent},
  {path: '**', component: ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
