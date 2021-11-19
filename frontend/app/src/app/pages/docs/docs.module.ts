import { NgModule } from '@angular/core';

import { DocsRoutingModule } from './docs-routing.module';

import { DocsComponent } from './docs.component';


@NgModule({
  imports: [DocsRoutingModule],
  declarations: [DocsComponent],
  exports: [DocsComponent]
})
export class DocsModule { }
