import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DocsComponent },
  { path: 'about', component: DocsComponent },
  { path: 'notes', component: DocsComponent },
  { path: 'next', component: DocsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
