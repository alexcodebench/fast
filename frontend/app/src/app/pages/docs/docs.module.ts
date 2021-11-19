import { NgModule } from '@angular/core';

import { DocsRoutingModule } from './docs-routing.module';

import { DocsComponent } from './docs.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { NextComponent } from './next/next.component';


@NgModule({
  imports: [DocsRoutingModule],
  declarations: [DocsComponent, AboutComponent, NotesComponent, NextComponent],
  exports: [DocsComponent]
})
export class DocsModule { }
