import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs.component';
import { NextComponent } from './next/next.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'next', component: NextComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
