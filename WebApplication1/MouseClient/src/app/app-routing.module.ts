import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MousesComponent } from './mouses/mouses.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';

const routes: Routes = [
  { path: 'mouses', component: MousesComponent },
  { path: 'keyboards', component: KeyboardsComponent },
  { path: '', redirectTo: '/mouses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
